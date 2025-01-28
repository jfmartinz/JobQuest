import { defineStore } from 'pinia';

import getJobs from '@/api/getJobs';
import { useUserStore } from '@/stores/user';
export const FETCH_JOBS = 'FETCH_JOBS';
export const UNIQUE_ORGANIZATION = 'UNIQUE_ORGANIZATION';
export const FILTERED_JOBS_BY_ORGANIZATION = 'FILTERED_JOBS_BY_ORGANIZATION';
export const UNIQUE_JOB_TYPES = 'UNIQUE_JOB_TYPES';
export const FILTERED_JOBS_BY_JOB_TYPES = 'FILTERED_JOBS_BY_JOB_TYPES';
export const FILTERED_JOBS = 'FILTERED_JOBS';

import type { Job } from '@/api/types';

export interface JobState {
  jobs: Job[];
}

export const useJobsStore = defineStore('jobs', {
  state: (): JobState => ({
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
      const uniqueOrganizations = new Set<string>();
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
      return uniqueOrganizations;
    },
    [UNIQUE_JOB_TYPES](state) {
      const uniqueJobTypes = new Set<string>();
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
      return uniqueJobTypes;
    },
    [FILTERED_JOBS](state) {
      const userStore = useUserStore();
      const noSelectedJobTypes = userStore.selectedJobTypes.length === 0;
      const noSelectedOrganization =
        userStore.selectedOrganizations.length === 0;

      return state.jobs
        .filter((job) => {
          if (noSelectedOrganization) return true;
          return userStore.selectedOrganizations.includes(job.organization);
        })
        .filter((job) => {
          if (noSelectedJobTypes) return true;
          return userStore.selectedJobTypes.includes(job.jobType);
        });
    }
  }
});
