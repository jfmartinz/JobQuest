import { defineStore } from 'pinia';

import getJobs from '@/api/getJobs';
import { useUserStore } from '@/stores/user';
export const FETCH_JOBS = 'FETCH_JOBS';
export const UNIQUE_ORGANIZATION = 'UNIQUE_ORGANIZATION';
export const FILTERED_JOBS_BY_ORGANIZATION = 'FILTERED_JOBS_BY_ORGANIZATION';

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: []
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs();
      this.jobs = jobs;
    }
  },
  getters: {
    [UNIQUE_ORGANIZATION](state) {
      const uniqueOrganizations = new Set();
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
      return uniqueOrganizations;
    },
    [FILTERED_JOBS_BY_ORGANIZATION](state) {
      const userStore = useUserStore();
      return state.jobs.filter((job) =>
        userStore.selectedOrganizations.includes(job.organization)
      );
    }
  }
});
