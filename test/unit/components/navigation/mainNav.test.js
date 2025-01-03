import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/Navigation/MainNav.vue';
import { describe, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { RouterLinkStub } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';

vi.mock('vue-router');

const renderMainNav = () => {
  const pinia = createTestingPinia();
  useRoute.mockReturnValue({ name: 'Home' });
  render(MainNav, {
    global: {
      plugins: [pinia],
      stubs: {
        FontAwesomeIcon: true,
        RouterLink: RouterLinkStub
      }
    }
  });
};
describe('MainNav', () => {
  it('display the menu items', () => {
    renderMainNav();
    const navigationMenuItems = screen.getAllByRole('listitem');
    const navigationMenuTexts = navigationMenuItems.map(
      (item) => item.textContent
    );
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Benefits',
      'Jobs',
      'Students'
    ]);
  });

  describe('When the user logs in', () => {
    it('display the user profile image', async () => {
      renderMainNav();
      const userStore = useUserStore();
      let profileImage = screen.queryByRole('img', {
        name: /user profile/i
      });

      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      });
      userStore.isLoggedIn = true;
      await userEvent.click(loginButton);

      profileImage = screen.queryByRole('img', {
        name: /user profile/i
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
