<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
      />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
          >
            Previous
          </router-link>
          <router-link
            v-if="nextPage"
            role="link"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
          >
            Next Page
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import JobListing from '@/components/JobResults/JobListing.vue';
import {
  useJobsStore,
  FETCH_JOBS,
  FILTERED_JOBS_BY_ORGANIZATION
} from '@/stores/jobs';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'JobListings',
  components: {
    JobListing
  },
  computed: {
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;

      return previousPage >= firstPage ? previousPage : undefined;
    },
    currentPage() {
      return Number.parseInt(this.$route.query.page || '1');
    },
    ...mapState(useJobsStore, {
      FILTERED_JOBS_BY_ORGANIZATION,
      nextPage() {
        const nextPage = this.currentPage + 1;
        const lastPage = Math.ceil(
          this.FILTERED_JOBS_BY_ORGANIZATION.length / 10
        );

        return nextPage <= lastPage ? nextPage : undefined;
      },
      displayedJobs() {
        const pageNum = this.currentPage;
        const firstJobIndex = (pageNum - 1) * 10;
        const lastJobIndex = pageNum * 10;
        return this.FILTERED_JOBS_BY_ORGANIZATION.slice(
          firstJobIndex,
          lastJobIndex
        );
      }
    })
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS])
  }
};
</script>
