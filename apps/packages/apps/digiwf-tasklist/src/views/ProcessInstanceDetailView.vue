<template>
  <app-view-layout>
    <v-flex v-if="errorMessage">
      <AppToast
        :message="errorMessage"
        type="error"
      />
    </v-flex>

    <v-flex v-if="processInstanceDetail !== null">
      <h1>{{ processInstanceDetail.definitionName }}</h1>
      <p>{{ processInstanceDetail.description }}</p>

      <v-stepper
        :value="currentStatus"
        alt-labels
        elevation="1"
        style="background-color: #fafafa;"
      >
        <v-stepper-header style="padding: 30px 0">
          <template v-for="(status, index) in processInstanceDetail.processConfig.statusConfig">
            <v-stepper-step

              :key="status.position"
              :complete="status.position <= currentStatus"
              :step="status.position"
              class="text-center flex-grow-1"
            >
              <span class="text-center">{{ status.label }}</span>
            </v-stepper-step>
            <v-divider
              v-if="index !== processInstanceDetail.processConfig.statusConfig.length - 1"
              :key="status.position+'dev'"
            />
          </template>
        </v-stepper-header>
      </v-stepper>
      <v-expansion-panels
        v-model="panel"
        multiple
      >
        <v-expansion-panel class="mt-5">
          <v-expansion-panel-header class="pa-5">
            <h3>Aufgaben</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="table">
              <v-simple-table>
                <template #default>
                  <thead>
                  <tr>
                    <th class="colMin">
                      Pos.
                    </th>
                    <th class="colMax">
                      Aufgabe
                    </th>
                    <th class="colMin">
                      Erledigt am
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                    v-for="(item, index) in sortedHistoricTasks"
                    :key="index"
                  >
                    <td class="cell noWrap">
                      {{ index + 1 }}
                      .
                    </td>

                    <td class="cell">
                      {{ item.name }}
                    </td>

                    <td class="cell noWrap">
                      <v-flex class="d-flex justify-space-between align-center">
                        {{ formatEndTaskText(item) }}
                      </v-flex>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel
          v-if="processInstanceDetail.jsonSchema"
          class="mt-5 "
        >
          <v-expansion-panel-header class="pa-5">
            <h3>Daten</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-json-renderer
              v-if="processInstanceDetail.jsonSchema"
              :readonly="true"
              :schema="processInstanceDetail.jsonSchema"
              :value="processInstanceDetail.data"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-flex>
  </app-view-layout>
</template>


<style scoped>

.table {
  background-color: transparent;
  border-radius: 4px;
}

.colMin {
  white-space: nowrap;
}

.colMax {
  width: 60%;
}

.cell {
  border-bottomColor: #CCC;
}

.row :last-child > * {
  border-bottom: none;
}

.noWrap {
  white-space: nowrap;
}

</style>

<script lang="ts">

import {Component, Prop, Provide, Vue} from "vue-property-decorator";
import AppViewLayout from "@/components/UI/AppViewLayout.vue";
import AppToast from "@/components/UI/AppToast.vue";
import {DateTime} from "luxon";
import {
  FetchUtils,
  HistoryTask,
  ProcessInstanceControllerApiFactory,
  ProcessInstanceDetailDto,
  StatusConfig
} from '@miragon/digiwf-engine-api-internal';
import AppJsonRenderer from "@/components/schema/AppJsonRenderer.vue";
import {FormContext} from "@miragon/digiwf-multi-file-input";
import {ApiConfig} from "../api/ApiConfig";

@Component({
  components: {AppJsonRenderer, AppToast, AppViewLayout}
})
export default class ProcessInstanceDetailView extends Vue {

  processInstanceDetail: ProcessInstanceDetailDto | null = null;
  errorMessage = "";
  panel = [0, 1]

  @Prop()
  processId!: string;
  @Provide('apiEndpoint')
  apiEndpoint = ApiConfig.base;

  @Provide('formContext')
  get formContext(): FormContext {
    return {id: this.processId, type: "instance"}
  };

  get currentStatus(): number {
    return this.processInstanceDetail?.processConfig?.statusConfig?.find((status: StatusConfig) => status.key === this.processInstanceDetail?.statusKey)?.position || 1;
  }

  get sortedHistoricTasks(): HistoryTask[] {
    if (this.processInstanceDetail !== null && this.processInstanceDetail!.historyTasks !== null) {
      return this.processInstanceDetail!.historyTasks!.filter(Boolean).sort((a, b) => {
        if (!a.endTime) { // no endtime => a is after b
          return 1;
        }
        if (!b.endTime) { // no endtime => b is after a
          return -1;
        }
        return a.endTime!.localeCompare(b.endTime!);
      });
    }
    return [];
  }

  created() {
    this.loadProcessInstanceDetail();
  }

  async loadProcessInstanceDetail(): Promise<void> {
    try {
      const cfg = ApiConfig.getAxiosConfig(FetchUtils.getGETConfig());
      const res = await ProcessInstanceControllerApiFactory(cfg).getProcessInstanceDetail(this.processId);
      this.processInstanceDetail = res.data;

      this.errorMessage = "";
    } catch (error) {
      this.errorMessage = 'Der Vorgang konnte nicht geladen werden.';
    }
  }

  formatEndTaskText(item: HistoryTask): string {
    if (item.endTime) {
      return DateTime.fromISO(item.endTime!).toLocaleString(DateTime.DATETIME_SHORT);
    }
    return "offen";
  }

  openTask(id: string): void {
    let route = this.$router.resolve({path: "/task/" + id});
    window.open(route.href);
  }


}
</script>
