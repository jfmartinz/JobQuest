import { createPinia, setActivePinia } from 'pinia';

import { useUserStore } from '@/stores/user';

describe('User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('state', () => {
    it('keeps track of if user is logged in', () => {
      const store = useUserStore();
      expect(store.isLoggedIn).toBe(false);
    });

    it('stores organizations that the user would like to filter out by', () => {
      const store = useUserStore();
      store.ADD_SELECTED_ORGANIZATIONS(['org1', 'org2']);
      expect(store.selectedOrganizations).toEqual(['org1', 'org2']);
    });

    it('stores job type that the user would like to filter out by', () => {
      const userStore = useUserStore();
      expect(userStore.selectedJobTypes).toEqual([]);
    });
  });

  describe('action', () => {
    it('logs the user in', () => {
      const store = useUserStore();
      store.loginUser();
      expect(store.isLoggedIn).toBe(true);
    });
    describe('ADD_SELECTED_JOB_TYPES', () => {
      it('updates job types the user has chosen to filter jobs by ', () => {
        const userStore = useUserStore();
        userStore.ADD_SELECTED_JOB_TYPES(['jobType1', 'jobType2']);
        expect(userStore.selectedJobTypes).toEqual(['jobType1', 'jobType2']);
      });
    });
  });
});
