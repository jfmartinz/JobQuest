import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import JobListings from '@/components/JobResults/JobListings.vue';
import { createTestingPinia } from '@pinia/testing';
import { useJobsStore } from '@/stores/jobs';

describe('JobListings', () => {
  const createRoute = (queryParams) => ({
    query: {
      page: '5',
      ...queryParams
    }
  });

  const renderJobListings = ($route) => {
    const pinia = createTestingPinia();
    render(JobListings, {
      global: {
        plugins: [pinia],
        mocks: {
          $route
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });
  };

  beforeEach(() => {
    // Mock the environment variable
    process.env.VITE_APP_API_URL = 'http://myfakeapi.com';
  });

  it('fetches job', () => {
    const $route = createRoute();

    renderJobListings($route);
    const jobStore = useJobsStore();
    expect(jobStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it('displays a maximum of 10 jobs', async () => {
    const queryParams = { page: '1' };
    const $route = createRoute(queryParams);
    renderJobListings($route);

    const jobStore = useJobsStore();
    jobStore.jobs = Array(15).fill({});

    const jobListings = await screen.findAllByRole('listitem');
    expect(jobListings).toHaveLength(10);
  });
});
