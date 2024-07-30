import { createPinia, setActivePinia } from 'pinia';

import { useJobsStore } from '@/stores/jobs';

describe('State', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('stores job listings', () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});
