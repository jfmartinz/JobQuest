import { render, screen } from '@testing-library/vue';

import SubNav from '@/components/Navigation/SubNav.vue';
import { describe } from 'vitest';

const renderSubNav = (routerName) => {
  render(SubNav, {
    global: {
      mocks: {
        $route: {
          name: routerName
        }
      },
      stubs: {
        FontAwesomeIcon: true
      }
    }
  });
};

describe('SubNav', () => {
  describe('when user is on jobs page', () => {
    it('display a jobs count', () => {
      const routerName = 'JobResults';
      renderSubNav(routerName);

      const jobCount = screen.getByText('20');
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe('when user is not on jobs page', () => {
    it('does not display the jobs count', () => {
      const routerName = 'Home';
      renderSubNav(routerName);

      const jobCount = screen.queryByText('20');
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
