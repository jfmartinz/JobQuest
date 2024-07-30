import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import axios from 'axios';
import JobListings from '@/components/JobResults/JobListings.vue';
import { createPinia, setActivePinia } from 'pinia';
vi.mock('axios');

describe('JobListings', () => {
  const pinia = createPinia();
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const createRoute = (queryParams) => ({
    query: {
      page: '5',
      ...queryParams
    }
  });

  const renderJobListings = ($route) => {
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
    axios.get.mockResolvedValue({ data: [] });
    const $route = createRoute();

    renderJobListings($route);

    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/jobs');
  });

  it('displays a maximum of 10 jobs', async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const queryParams = { page: '1' };
    const $route = createRoute(queryParams);

    renderJobListings($route);

    const jobListings = await screen.findAllByRole('listitem');
    expect(jobListings).toHaveLength(10);
  });
});
