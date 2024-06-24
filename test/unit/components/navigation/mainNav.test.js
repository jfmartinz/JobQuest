import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/navigation/MainNav.vue';
import { describe, expect } from 'vitest';
// import ProfileImage from '@/components/ProfileImage.vue'
import userEvent from '@testing-library/user-event';

const renderMainNav = () => {
  render(MainNav, {
    global: {
      stubs: {
        FontAwesomeIcon: true
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
      let profileImage = screen.queryByRole('img', {
        name: /user profile/i
      });

      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      });

      await userEvent.click(loginButton);

      profileImage = screen.queryByRole('img', {
        name: /user profile/i
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
