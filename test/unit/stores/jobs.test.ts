import { createPinia, setActivePinia } from 'pinia';
import axios from 'axios';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { Job } from '@/api/types';

import type { Mock } from 'vitest';
vi.mock('axios');
const axiosGetMock = axios.get as Mock;

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
      axiosGetMock.mockResolvedValue({ data: ['Jobs 1', 'Jobs 2'] });
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

  const createJob = (job: Partial<Job> = {}): Job => ({
    id: 33,
    title: 'jQuery Designer',
    organization: 'Vue and a Half Men',
    degree: 'Pursuing Degree',
    jobType: 'Part-time',
    location: ['Cologne', 'Atlanta', 'Milwaukee'],
    minimumQualificatons: ['Target seamless relationships'],
    preferredQualifications: ['Reinvent cross-media markets'],
    description: ['Interest matter'],
    dateAdded: '2021-05-28',
    ...job
  });

  describe('UNIQUE_ORGANIZATION', () => {
    it('returns a Set of unique organizations', () => {
      const store = useJobsStore();
      store.jobs = [
        createJob({ organization: 'Org 1' }),
        createJob({ organization: 'Org 2' }),
        createJob({ organization: 'Org 1' })
      ];
      const orgs = store.UNIQUE_ORGANIZATION;
      expect(orgs).toEqual(new Set(['Org 1', 'Org 2']));
    });
  });

  describe('UNIQUE_JOB_TYPES', () => {
    it('returns a Set of unique job types', () => {
      const store = useJobsStore();
      store.jobs = [
        createJob({ jobType: 'jobType1' }),
        createJob({ jobType: 'jobType2' }),
        createJob({ jobType: 'jobType1' })
      ];
      const jobTypes = store.UNIQUE_JOB_TYPES;
      expect(jobTypes).toEqual(new Set(['jobType1', 'jobType2']));
    });
  });

  describe('when the user has not selected any organizations', () => {
    it('returns all jobs', () => {
      const jobStore = useJobsStore();
      jobStore.jobs = [
        createJob({ organization: 'Org 1' }),
        createJob({ organization: 'Org 2' }),
        createJob({ organization: 'Org 3' })
      ] as Job[];
      const userStore = useUserStore();
      userStore.selectedOrganizations = [];

      const result = jobStore.FILTERED_JOBS;
      expect(result).toEqual([
        createJob({ organization: 'Org 1' }),
        createJob({ organization: 'Org 2' }),
        createJob({ organization: 'Org 3' })
      ]);
    });
  });

  describe('when the user has not selected any job types', () => {
    it('returns all jobs', () => {
      const jobStore = useJobsStore();
      jobStore.jobs = [
        createJob({ jobType: 'jobType1' }),
        createJob({ jobType: 'jobType2' }),
        createJob({ jobType: 'jobType3' })
      ];
      const userStore = useUserStore();
      userStore.selectedJobTypes = [];

      const result = jobStore.FILTERED_JOBS;
      expect(result).toEqual([
        createJob({ jobType: 'jobType1' }),
        createJob({ jobType: 'jobType2' }),
        createJob({ jobType: 'jobType3' })
      ]);
    });
  });
});
