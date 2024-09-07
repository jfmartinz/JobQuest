import { createPinia, setActivePinia } from 'pinia';
import axios from 'axios';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';

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
});
