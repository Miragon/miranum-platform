import {ActionContext} from "vuex";
import {RootState} from "../index";
import {TasksState} from "./tasks";
import {FetchUtils, ServiceInstanceControllerApiFactory, ServiceInstanceTO} from '@muenchen/digiwf-engine-api-internal';
import {EngineServiceApiConfig} from "../../api/EngineServiceApiConfig";

export interface ProcessInstancesState {
  processInstances: ServiceInstanceTO[];
  lastFetch: number;
  filter: string;
}

export default {
  namespaced: true,
  state: {
    processInstances: new Array<ServiceInstanceTO>(),
    lastFetch: 0,
    filter: ""
  } as ProcessInstancesState,
  getters: {
    shouldUpdate: (state: TasksState) => (): boolean => {
      const lastFetch = state.lastFetch;
      if (!lastFetch) {
        return true;
      }
      const currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - lastFetch) / 1000 > 60;
    },
    processInstances(state: ProcessInstancesState): ServiceInstanceTO[] {
      return state.processInstances.filter(Boolean).sort((a, b) => b.startTime!.localeCompare(a.startTime!));
    },
    filter(state: ProcessInstancesState): string | null {
      return state.filter;
    }
  },
  mutations: {
    setProcessInstances(state: ProcessInstancesState, processInstances: ServiceInstanceTO[]): void {
      state.processInstances = processInstances;
    },
    setLastFetch(state: TasksState, date: number): void {
      state.lastFetch = date;
    },
    setFilter(state: ProcessInstancesState, filter: string): void {
      state.filter = filter;
    }
  },
  actions: {
    async getProcessInstances(context: ActionContext<ProcessInstancesState, RootState>, forceRefresh: boolean): Promise<void> {
      if (!forceRefresh && !context.getters.shouldUpdate()) {
        return;
      }
      //const processInstances = await ProcessService.loadMyInstances();
      const cfg = EngineServiceApiConfig.getAxiosConfig(FetchUtils.getGETConfig());

      try {
        const res = await ServiceInstanceControllerApiFactory(cfg).getAssignedInstances();

        context.commit('setLastFetch', new Date().getTime());
        context.commit('setProcessInstances', res.data);
      } catch (error) {
        FetchUtils.defaultCatchHandler(error, "Die Vorgänge konnten nicht geladen werden. Bitte versuchen Sie es erneut.");
      }
    }
  }
};
