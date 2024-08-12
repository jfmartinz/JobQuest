import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { createTestingPinia } from '@pinia/testing';
import JobFiltersSidebarOrganizations from '@/components/JobResults/JobsFiltersSidebar/JobFiltersSidebarOrganizations.vue';
import { useJobsStore } from '@/stores/jobs';

describe('JobFilterSideBar', () => {
  it('renders unique list of organizations', async () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();
    jobsStore.UNIQUE_ORGANIZATION = new Set(['Google', 'Amazon']);

    render(JobFiltersSidebarOrganizations, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });

    const button = screen.getByRole('button', { name: /accordion title/i });
    await userEvent.click(button);
    const organizationListItems = screen.getAllByRole('listitem');
    const organizations = organizationListItems.map((item) => item.textContent);
    expect(organizations).toEqual(['Google', 'Amazon']);
  });
});
