import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';

import JobListing from '@/components/JobResults/JobListing.vue';

describe('JobListing', () => {
  it('renders job title', () => {
    render(JobListing, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        job: {
          title: 'Vue Developer'
        }
      }
    });
    const jobTitle = screen.getByText('Vue Developer');
    expect(jobTitle).toBeInTheDocument();
  });

  it('renders job organization', () => {
    render(JobListing, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        job: {
          organization: 'AirBnB'
        }
      }
    });
    const jobOrg = screen.getByText('AirBnB');
    expect(jobOrg).toBeInTheDocument();
  });
});
