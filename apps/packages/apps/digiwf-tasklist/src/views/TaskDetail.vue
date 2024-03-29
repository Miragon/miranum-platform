<template>
  <app-view-layout>
    <v-flex v-if="errorMessage">
      <AppToast
        :message="errorMessage"
        type="error"
      />
    </v-flex>
    <v-flex v-if="task !== null">
      <span class="processName grey--text">{{ task.processName }}</span>
      <h1>{{ task.name }}</h1>
      <p>{{ task.description }}</p>
      <app-json-form
        :schema="task.schema"
        :value="task.variables"
        @input="modelChanged"
        @complete-form="handleCompleteTask"
      />
    </v-flex>
    <v-flex class="buttonWrapper">
      <v-speed-dial
        direction="bottom"
        fab
        fixed
        transition="slide-y-transition"
      >
        <template #activator>
          <v-btn
            :aria-label="fab ? 'Weitere Aktionen schließen' : 'Weitere Aktionen öffnen' "
            color="white"
            fab
            @click="switchFab"
          >
            <v-icon v-if="fab">
              mdi-close
            </v-icon>
            <v-icon v-else>
              mdi-dots-vertical
            </v-icon>
          </v-btn>
        </template>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              aria-label="Wiedervorlage bearbeiten"
              color="white"
              fab
              v-bind="attrs"
              @click="openFollowUp"
              v-on="on"
            >
              <v-icon> mdi-calendar-arrow-right</v-icon>
            </v-btn>
          </template>
          <span>Wiedervorlage bearbeiten</span>
        </v-tooltip>

        <loading-fab
          :has-error="hasSaveError"
          :is-loading="isSaving"
          button-text="Aufgabe zwischenspeichern"
          color="white"
          @on-click="saveTask"
        >
          <v-icon> mdi-content-save</v-icon>
        </loading-fab>

        <loading-fab
          v-if="task?.isCancelable"
          :button-text="cancelText"
          :has-error="hasCancelError"
          :is-loading="isCancelling"
          color="white"
          @on-click="handleCancelTask"
        >
          <v-icon> mdi-cancel</v-icon>
        </loading-fab>

      </v-speed-dial>
    </v-flex>
    <task-follow-up-dialog
      :follow-up-date="followUpDate"
      :value="isFollowUpDialogVisible"
      @cancel="closeFollowUp"
      @save="saveFollowUp"
    />
  </app-view-layout>
</template>


<style scoped>

.taskForm {
  margin-top: 1rem;
}

.processName {
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
}

.v-btn--floating {
  position: relative;
}

.buttonWrapper {
  position: absolute;
  top: 70px;
  right: 0;
}

@media only screen and (max-width: 1500px) {
  .buttonWrapper {
    right: 6em;
  }
}
</style>

<script lang="ts">
import {Component, Prop, Provide, Vue} from "vue-property-decorator";
import AppViewLayout from "@/components/UI/AppViewLayout.vue";
import AppToast from "@/components/UI/AppToast.vue";
import AppYesNoDialog from "@/components/common/AppYesNoDialog.vue";
import TaskFollowUpDialog from "@/components/task/TaskFollowUpDialog.vue";
import LoadingFab from "@/components/UI/LoadingFab.vue";
import {FormContext} from "@miragon/digiwf-multi-file-input";
import {ApiConfig} from "../api/ApiConfig";
import {cancelTask, completeTask, deferTask, loadTask, saveTask} from "../middleware/tasks/taskMiddleware";
import {HumanTaskDetails} from "../middleware/tasks/tasksModels"
import router from "../router";

@Component({
  components: {TaskFollowUpDialog, AppToast, AppViewLayout, AppYesNoDialog, LoadingFab}
})
export default class TaskDetail extends Vue {

  task: HumanTaskDetails | null = null;
  followUpDate: string | null = "";
  model: any = null;

  errorMessage = "";
  hasChanges = false;

  isSaving = false;
  hasSaveError = false;
  isCompleting = false;
  hasCompleteError = false;
  isCancelling = false;
  hasCancelError = false
  cancelText = "Aufgabe Abbrechen";

  isDownloading = false;
  hasDownloadError = false;
  hasDownloadButton = false;
  downloadButtonText = "Dokument herunterladen";

  isFollowUpDialogVisible = false;

  /**
   * toggle for showing fab menu
   */
  fab = false;

  @Prop()
  id!: string;
  @Provide('apiEndpoint')
  apiEndpoint = ApiConfig.base;
  @Provide('taskServiceApiEndpoint')
  taskServiceApiEndpoint = ApiConfig.tasklistBase;

  @Provide('formContext')
  get formContext(): FormContext {
    return {id: this.id, type: "task"};
  }

  created() {
    loadTask(this.id).then(({data, error}) => {
      if (!!data) {
        this.task = data.task;
        this.model = data.model;
        this.followUpDate = data.followUpDate;
        this.cancelText = data.cancelText;
        this.hasDownloadButton = data.hasDownloadButton;
        this.downloadButtonText = data.downloadButtonText;
      }
      if (!!error) {
        this.errorMessage = error;
      }
    });
  }

  mounted() {
    // Apply a @click.stop to the .v-speed-dial__list that wraps the default slot
    this.$el
      .querySelector(".v-speed-dial__list")!
      .addEventListener("click", (e) => {
        e.stopPropagation();
      });
  }

  handleCompleteTask(model: any) {
    this.isCompleting = true;
    completeTask(this.id, model)
      .then(result => {
        this.isCompleting = false;
        this.hasCompleteError = result.isError;
        this.errorMessage = result.errorMessage || "";
        if (!result.isError) {
          this.hasChanges = false;
          router.push({path: "/mytask"}); // TODO: copied from old source code. Question is why /task is called (path does not exist). check later
        }
      });
  }

  async saveTask(): Promise<void> {
    this.isSaving = true;
    this.hasSaveError = false;

    return saveTask(this.id, this.model).then((result) => {
      this.isSaving = false;
      this.errorMessage = result.errorMessage || "";
      this.hasSaveError = result.isError;
      if (!result.isError) {
        this.hasChanges = false;
      }

      return result.isError
        ? Promise.reject()
        : Promise.resolve();
    });
  }

  openFollowUp(): void {
    this.isFollowUpDialogVisible = true;
    this.fab = false;
  }

  closeFollowUp(): void {
    this.isFollowUpDialogVisible = false;
  }

  switchFab():
    void {
    this.fab = !this.fab;
  }

  saveFollowUp(followUpDate: string) {
    this.followUpDate = followUpDate;
    this.isFollowUpDialogVisible = false;

    (this.hasChanges
      ? this.saveTask()
      : Promise.resolve())
      .then(() => {
        deferTask(this.id, followUpDate)
          .then(result => {
            this.errorMessage = result.errorMessage || "";
          });
      });
  }

  handleCancelTask() {
    this.isCancelling = true;
    cancelTask(this.id).then(result => {
      this.isCancelling = false;
      this.hasCancelError = result.isError;
      this.errorMessage = result.errorMessage || "";
    });
  }

  modelChanged(model: any) {
    this.model = model;
  }

}

</script>
