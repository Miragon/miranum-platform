<template>
  <app-view-layout>
    <v-flex v-if="errorMessage">
      <AppToast
        :message="errorMessage"
        type="error"
      />
    </v-flex>
    <v-flex v-if="task !== null">
      <span class="processName">{{ task.processName }}</span>
      <h1>{{ task.name }}</h1>
      <span>{{ task.description }}</span>
      <base-form
        v-if="task.form"
        :buttons-disabled="true"
        :form="task.form"
        :init-model="task.variables"
        :readonly-mode="true"
        class="taskForm"
      />
      <app-json-form
        v-else
        :readonly="true"
        :schema="task.schema"
        :value="task.variables"
      />
    </v-flex>
    <v-flex
      v-if="task !== null"
      class="buttonWrapper"
    >
      <v-btn
        class="assignButton"
        color="primary"
        @click="checkTaskAssignment"
      >
        <v-icon left>
          mdi-pencil
        </v-icon>
        Bearbeiten
      </v-btn>
    </v-flex>

    <app-yes-no-dialog v-if="task"
                       :value="showModal"
                       dialogtitle="Aufgabenzuweisung"
                       @no="showModal = false"
                       @yes="triggerAssignTask"
    >
      <div>
        Die Aufgabe ist aktuell folgender Person zugewiesen:
        <h3>{{ task.assigneeFormatted }}</h3>
        <br>
        Wollen Sie die Aufgabe übernehmen?
      </div>
    </app-yes-no-dialog>

  </app-view-layout>
</template>


<style scoped>

.taskForm {
  margin-top: 1rem;
}

.processName {
  font-style: italic;
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
}

.buttonWrapper {
  position: absolute;
  top: 50px;
  right: 11rem;
}

.assignButton {
  width: 8rem;
  position: fixed;
}

</style>

<script lang="ts">

import {Component, Prop, Provide, Vue} from "vue-property-decorator";
import AppViewLayout from "@/components/UI/AppViewLayout.vue";
import AppToast from "@/components/UI/AppToast.vue";
import router from "../router";
import {UserDto} from '@miragon/digiwf-engine-api-internal';
import {FormContext} from "@miragon/digiwf-multi-file-input";
import {ApiConfig} from "../api/ApiConfig";
import {assignTask, loadTask} from "../middleware/tasks/taskMiddleware";
import {HumanTaskDetails} from "../middleware/tasks/tasksModels";

@Component({
  components: {AppToast, AppViewLayout}
})
export default class GroupTaskDetail extends Vue {

  task: HumanTaskDetails | null = null;
  isLoading = false;
  errorMessage = "";
  showModal = false;

  @Prop()
  id!: string;
  @Provide('apiEndpoint')
  apiEndpoint = ApiConfig.base;
  @Provide('taskServiceApiEndpoint')
  taskServiceApiEndpoint = ApiConfig.tasklistBase;

  @Provide('formContext')
  get formContext(): FormContext {
    return {id: this.id, type: "task"}
  };

  created() {
    this.isLoading = true
    loadTask(this.id)
      .then(result => {
        this.isLoading = false;
        if (result.data) {
          this.task = result.data.task
          this.errorMessage = "";
        }
        if (result.error) {
          this.errorMessage = result.error;
        }
      })
  }

  checkTaskAssignment() {
    loadTask(this.id)
      .then(result => {
        if (result.data?.task?.assigneeId) {
          const currentUser: UserDto = this.$store.getters['user/info'];
          if (this.task?.assigneeId != currentUser.id) {
            this.showModal = true;
            setTimeout(() => this.showModal = false, 10000);
          } else {
            router.push({path: '/task/' + this.id});
          }
        } else {
          this.triggerAssignTask();
        }
      })
  }

  triggerAssignTask() {
    this.showModal = false;

    assignTask(this.id).then((result) => {
      this.errorMessage = result.isError ? "Die Aufgabe konnte nicht zugewiesen werden." : "";
    })
  }
}
</script>
