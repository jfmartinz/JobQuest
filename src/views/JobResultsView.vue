<template>
  <div>
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSidebar from '@/components/JobResults/JobsFiltersSidebar/JobFiltersSidebar.vue';
import JobListings from '@/components/JobResults/JobListings.vue';
export default {
  name: 'JobResultsView',
  components: {
    JobFiltersSidebar,
    JobListings
  }
};
</script>
