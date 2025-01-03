<template>
  <div
    class="border-brand border-solid-gray-1 flex w-96 flex-col border-r bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button
            text="Clear Filters"
            type="secondary"
          ></action-button>
        </div>
      </div>

      <jobs-filter-sidebar-checkbox-group
        header="Job Types"
        :unique-values="UNIQUE_JOB_TYPES"
        :action="userStore.ADD_SELECTED_JOB_TYPES"
      />
      <jobs-filter-sidebar-checkbox-group
        header="Organizations"
        :unique-values="UNIQUE_ORGANIZATIONS"
        :action="userStore.ADD_SELECTED_ORGANIZATIONS"
      />
    </section>
  </div>
</template>

<script setup>
import ActionButton from '@/components/Navigation/ActionButton.vue';
import JobsFilterSidebarCheckboxGroup from './JobsFilterSidebarCheckboxGroup.vue';
import { computed } from 'vue';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';

const jobStore = useJobsStore();
const userStore = useUserStore();

const UNIQUE_JOB_TYPES = computed(() => jobStore.UNIQUE_JOB_TYPES);
const UNIQUE_ORGANIZATIONS = computed(() => jobStore.UNIQUE_ORGANIZATION);
</script>
<style scoped></style>
