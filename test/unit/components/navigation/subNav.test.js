import { render, screen } from '@testing-library/vue';

import SubNav from '@/components/Navigation/SubNav.vue';
import { useJobsStore } from '@/stores/jobs';
import { createTestingPinia } from '@pinia/testing';

const renderSubNav = (routerName) => {
  const pinia = createTestingPinia();
  const jobsStore = useJobsStore();

  render(SubNav, {
    global: {
      plugins: [pinia],
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
  return { jobsStore };
};

describe('SubNav', () => {
  describe('when user is on jobs page', () => {
    it('display a jobs count', async () => {
      const routerName = 'JobResults';
      const { jobsStore } = renderSubNav(routerName);
      const numberOfJobs = 20;
      jobsStore.FILTERED_JOBS = new Array(numberOfJobs).fill({});

      const jobCount = await screen.findByText(numberOfJobs);
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe('when user is not on jobs page', () => {
    it('does not display the jobs count', () => {
      const routerName = 'Home';
      const { jobsStore } = renderSubNav(routerName);
      const numberOfJobs = 20;
      jobsStore.FILTERED_JOBS = new Array(numberOfJobs).fill({});

      const jobCount = screen.queryByText(numberOfJobs);
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
