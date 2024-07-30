import { createPinia, setActivePinia } from 'pinia';
import axios from 'axios';
import { useJobsStore } from '@/stores/jobs';

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
