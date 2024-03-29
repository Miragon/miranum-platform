import {User, UserManager} from "oidc-client-ts";

const ssoBaseUrl = import.meta.env.SSO_BASE_URL || "http://keycloak:9090/auth/realms/miranum";
const ssoEngineClientId = import.meta.env.SSO_ENGINE_CLIENT_ID || "miranum";

export default class AuthService {
  userManager: UserManager | undefined

  constructor() {

    // const oidcConfig = {
    //   authority: ssoBaseUrl, // Replace with your OIDC provider's authority URL
    //   client_id: ssoEngineClientId, // Replace with your client ID
    //   redirect_uri: `${window.location.origin}/auth/`, // Replace with your redirect URI
    //   response_type: 'code', // Replace with the flow you want (code, id_token, token)
    //   scope: 'openid profile', // Replace with the required scopes
    //   post_logout_redirect_uri: `${window.location.origin}/logout.html` // Replace with your logout redirect URI
    // };
    //
    // this.userManager = new UserManager(oidcConfig)
    // this.userManager.startSilentRenew()
    // this.userManager.events.addSilentRenewError((e) => {
    //   console.log("Silent renew error", e);
    //   this.logout();
    // });
  }

  public async initUserManager(): Promise<AuthService> {

    this.userManager = await fetch('/config.json').then(async (response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch OIDC config');
      }

      const data = await response.json();
      const oidcConfig = data.SSO_SETTINGS;

      oidcConfig.redirect_uri = `${window.location.origin}/auth/`;
      oidcConfig.post_logout_redirect_uri = `${window.location.origin}/logout/`
      const userManager = new UserManager(oidcConfig)
      userManager.startSilentRenew()
      userManager.events.addSilentRenewError((e) => {
        console.log("Silent renew error", e);
        this.logout();
      });

      return userManager;
    });

    return this;
  }

  public getUser(): Promise<User | null> {
    return this.userManager!.getUser();
  }

  public signinCallback(): Promise<User | void> {
    return this.userManager!.signinCallback();
  }

  public async login(): Promise<void> {
    return this.userManager!.signinRedirect();
  }

  public logout(): Promise<void> {
    localStorage.clear();
    sessionStorage.clear();
    return this.userManager!.signoutRedirect();
  }
}
