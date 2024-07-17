<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
      />
    </ol>
  </main>
</template>

<script>
import JobListing from '@/components/JobResults/JobListing.vue';
import axios from 'axios';

export default {
  name: 'JobListings',
  components: {
    JobListing
  },
  data() {
    return {
      jobs: []
    };
  },
  computed: {
    displayedJobs() {
      const pageStr = this.$route.query.page || '1';
      const pageNum = Number.parseInt(pageStr);
      const firstJobIndex = (pageNum - 1) * 10;
      const lastJobIndex = pageNum * 10;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/jobs');
    this.jobs = response.data;
  }
};
</script>
