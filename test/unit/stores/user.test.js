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
  });

  describe('action', () => {
    it('logs the user in', () => {
      const store = useUserStore();
      store.loginUser();
      expect(store.isLoggedIn).toBe(true);
    });
  });
});
