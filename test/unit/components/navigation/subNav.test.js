import { render, screen } from '@testing-library/vue';

import SubNav from '@/components/navigation/SubNav.vue';
import { describe } from 'vitest';

describe('SubNav', () => {
  describe('when user is on jobs page', () => {
    it('display a jobs count', () => {
      const $route = {
        name: 'JobResults'
      };

      render(SubNav, {
        global: {
          mocks: {
            $route
          },
          stubs: {
            FontAwesomeIcon: true
          }
        }
      });
      const jobCount = screen.getByText('20');

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe('when user is not on jobs page', () => {
    it('does not display the jobs count', () => {
      const $route = {
        name: 'Home'
      };
      render(SubNav, {
        global: {
          mocks: {
            $route
          },
          stubs: {
            FontAwesomeIcon: true
          }
        }
      });
      const jobCount = screen.queryByText('20');
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
