import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import JobSearchForm from '@/components/jobSearch/JobSearchForm.vue';
import { useRouter } from 'vue-router';
vi.mock('vue-router');

describe('JobSearchForm', () => {
  describe('when user submits a form', () => {
    it("directs user to job results page with user's search parameters", async () => {
      const push = vi.fn();

      useRouter.mockReturnValue({
        push
      });

      render(JobSearchForm, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        }
      });

      const roleInput = screen.getByRole('textbox', {
        name: /role/i
      });
      await userEvent.type(roleInput, 'Vue Developer');

      const locationInput = screen.getByRole('textbox', {
        name: /where?/i
      });
      await userEvent.type(locationInput, 'Dallas');

      const submitBtn = screen.getByRole('button', {
        name: /search/i
      });
      await userEvent.click(submitBtn);

      expect(push).toHaveBeenCalledWith({
        name: 'JobResults',
        query: {
          role: 'Vue Developer',
          location: 'Dallas'
        }
      });
    });
  });
});
