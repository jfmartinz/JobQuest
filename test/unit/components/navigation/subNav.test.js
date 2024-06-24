import { render, screen } from '@testing-library/vue';

import SubNav from '@/components/navigation/SubNav.vue';
import { describe } from 'vitest';

describe('SubNav', () => {
  describe('when user is on jobs page', () => {
    it('display a jobs count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultPage: true
          };
        }
      });
      const jobCount = screen.getByText('20');

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe('when user is not on jobs page', () => {
    it('does not display the jobs count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultPage: false
          };
        }
      });
      const jobCount = screen.queryByText('20');
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
