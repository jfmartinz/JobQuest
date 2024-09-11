import { createPinia, setActivePinia } from 'pinia';
import axios from 'axios';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';
import { describe, expect } from 'vitest';

vi.mock('axios');

describe('State', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('stores job listings', () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });

  describe('FETCH_JOBS', () => {
    it('makes an API request and stores received jobs', async () => {
      axios.get.mockResolvedValue({ data: ['Jobs 1', 'Jobs 2'] });
      const store = useJobsStore();
      await store.FETCH_JOBS();
      expect(store.jobs).toEqual(['Jobs 1', 'Jobs 2']);
    });
  });
});

describe('Getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('UNIQUE_ORGANIZATION', () => {
    it('returns a Set of unique organizations', () => {
      const store = useJobsStore();
      store.jobs = [
        { organization: 'Org 1' },
        { organization: 'Org 2' },
        { organization: 'Org 1' }
      ];
      const orgs = store.UNIQUE_ORGANIZATION;
      expect(orgs).toEqual(new Set(['Org 1', 'Org 2']));
    });
  });

  describe('UNIQUE_JOB_TYPES', () => {
    it('returns a Set of unique job types', () => {
      const store = useJobsStore();
      store.jobs = [
        { jobType: 'jobType1' },
        { jobType: 'jobType2' },
        { jobType: 'jobType1' }
      ];
      const jobTypes = store.UNIQUE_JOB_TYPES;
      expect(jobTypes).toEqual(new Set(['jobType1', 'jobType2']));
    });
  });

  describe('FILTERED_JOBS_BY_JOB_TYPES', () => {
    it('filters jobs by job types', () => {
      const jobStore = useJobsStore();
      jobStore.jobs = [
        { jobType: 'jobType1' },
        { jobType: 'jobType2' },
        { jobType: 'jobType3' }
      ];
      const userStore = useUserStore();

      userStore.selectedJobTypes = ['jobType1', 'jobType2'];

      const result = jobStore.FILTERED_JOBS_BY_JOB_TYPES;
      expect(result).toEqual([
        { jobType: 'jobType1' },
        { jobType: 'jobType2' }
      ]);
    });
  });

  describe('FILTERED_JOBS_BY_ORGANIZATION', () => {
    it('filters jobs by organization', () => {
      const jobStore = useJobsStore();
      jobStore.jobs = [
        { organization: 'Org 1' },
        { organization: 'Org 2' },
        { organization: 'Org 3' }
      ];
      const userStore = useUserStore();

      userStore.selectedOrganizations = ['Org 1', 'Org 2'];

      const result = jobStore.FILTERED_JOBS_BY_ORGANIZATION;
      expect(result).toEqual([
        { organization: 'Org 1' },
        { organization: 'Org 2' }
      ]);
    });
  });

  describe('when the user has not selected any organizations', () => {
    it('returns all jobs', () => {
      const jobStore = useJobsStore();
      jobStore.jobs = [
        { organization: 'Org 1' },
        { organization: 'Org 2' },
        { organization: 'Org 3' }
      ];
      const userStore = useUserStore();
      userStore.selectedOrganizations = [];

      const result = jobStore.FILTERED_JOBS_BY_ORGANIZATION;
      expect(result).toEqual([
        { organization: 'Org 1' },
        { organization: 'Org 2' },
        { organization: 'Org 3' }
      ]);
    });
  });

  describe('when the user has not selected any job types', () => {
    it('returns all jobs', () => {
      const jobStore = useJobsStore();
      jobStore.jobs = [
        { jobType: 'jobType1' },
        { jobType: 'jobType2' },
        { jobType: 'jobType3' }
      ];
      const userStore = useUserStore();
      userStore.selectedJobTypes = [];

      const result = jobStore.FILTERED_JOBS_BY_JOB_TYPES;
      expect(result).toEqual([
        { jobType: 'jobType1' },
        { jobType: 'jobType2' },
        { jobType: 'jobType3' }
      ]);
    });
  });
});
