import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import JobListings from '@/components/JobResults/JobListings.vue';
import { createTestingPinia } from '@pinia/testing';
import { useJobsStore } from '@/stores/jobs';
import { useRoute } from 'vue-router';
vi.mock('vue-router');

describe('JobListings', () => {
  const renderJobListings = () => {
    const pinia = createTestingPinia();
    render(JobListings, {
      global: {
        plugins: [pinia],

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
    useRoute.mockReturnValue({ query: { page: '1' } });

    renderJobListings();
    const jobStore = useJobsStore();
    expect(jobStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it('displays a maximum of 10 jobs', async () => {
    useRoute.mockReturnValue({ query: { page: '1' } });

    renderJobListings();

    const jobStore = useJobsStore();
    jobStore.jobs = Array(15).fill({});

    const jobListings = await screen.findAllByRole('listitem');
    expect(jobListings).toHaveLength(10);
  });
});
