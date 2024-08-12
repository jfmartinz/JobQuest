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
      <job-filters-sidebar-organizations></job-filters-sidebar-organizations>
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/Navigation/ActionButton.vue';
import JobFiltersSidebarOrganizations from './JobFiltersSidebarOrganizations.vue';

export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    JobFiltersSidebarOrganizations
  }
};
</script>
<style scoped></style>
