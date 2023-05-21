<template>
  <app-view-layout>
    <task-list
      view-name="Meine Aufgaben"
      :tasks="data?.content || []"
      :is-loading="isLoading"
      :errorMessage="errorMessage"
      :filter="filter"
      @changeFilter="onFilterChange"
      @loadTasks="reloadTasks"
    >
      <template #default="props">
        <task-item
          :key="props.item.id"
          :task="props.item"
          :search-string="props.item.searchInput"
        />
        <hr class="hrDivider">
      </template>
    </task-list>
    <div style="margin-left: auto">
      <v-checkbox
        v-model="followUp"
        label="Wiedervorlage anzeigen"
        hide-details
        dense
        class="followUp"
      />
    </div>
    <AppPaginationFooter
      found-data-text="Vorgänge gefunden"
      :size="pagination.size?.value || 20"
      :on-size-change="pagination.onSizeChange"
      :last-page="pagination.lastPage"
      :last-page-button-disabled="pagination.isLastPageButtonDisabled()"
      :next-page="pagination.nextPage"
      :total-number-of-items="data?.totalElements || 0"
      :next-page-button-disabled="pagination.isNextPageButtonDisabled()"
      :number-of-pages="data?.totalPages || 1"
      :page="pagination.getCurrentPageLabel()"
      :update-items-per-page="pagination.updateItemsPerPage"
    />
  </app-view-layout>
</template>

<style scoped>
.followUp {
  margin: 0;
}
</style>

<script lang="ts">
import AppToast from "@/components/UI/AppToast.vue";
import AppViewLayout from "@/components/UI/AppViewLayout.vue";
import TaskList from "@/components/task/TaskList.vue";
import TaskItem from "@/components/task/TaskItem.vue";
import {defineComponent, ref, watch} from "vue";
import {useRouter} from "vue-router/composables";
import AppPaginationFooter from "../components/UI/AppPaginationFooter.vue";
import {useMyTasksQuery} from "../middleware/tasks/taskMiddleware";
import {useGetPaginationData} from "../middleware/paginationData";
import {usePageId} from "../middleware/pageId";

export default defineComponent({
  props: [],
  components: {AppPaginationFooter, TaskItem, TaskList, AppToast, AppViewLayout},
  setup() {
    const router = useRouter();
    const pageId = usePageId();
    const {searchQuery, size, page, setSize, setPage, setSearchQuery} = useGetPaginationData();

    const getFollowOfUrl = (): boolean => router.currentRoute.query?.followUp === "true"
    const followUp = ref<boolean>(getFollowOfUrl());
    const {isLoading, data, error, refetch} = useMyTasksQuery(page, size, searchQuery, followUp);

    watch(page, (newPage) => {
      setPage(newPage);
      refetch();
    })
    watch(size, (newSize) => {
      setSize(newSize)
      refetch();
    })

    watch(followUp, (followUp) => {
      router.replace({
        query: {
          ...router.currentRoute.query,
          followUp: followUp ? "true" : "false"
        }
      })
      refetch();
    });

    return {
      pageId,
      followUp,
      isLoading,
      errorMessage: error,
      data,
      filter: searchQuery,
      reloadTasks: refetch,
      pagination: {
        page,
        size,
        onSizeChange: setSize,
        getCurrentPageLabel: () => page.value + 1,
        setPage,
        lastPage: () => {
          if (page.value === 0) {
            return;
          }
          setPage(page.value - 1)
          refetch()
        },
        nextPage: () => {
          const totalPages = data.value?.totalPages;
          if (!totalPages || page.value === totalPages - 1) {
            return;
          }
          setPage(page.value + 1);
          refetch();
        },
        isLastPageButtonDisabled: () => page.value === 0,
        isNextPageButtonDisabled: () => page.value + 1 >= (data.value?.totalPages || 0),
        updateItemsPerPage: setSize
      },
      onFilterChange: (newFilter?: string) => {
        setSearchQuery(newFilter || "");
        refetch();
      },
    }
  }
});

</script>