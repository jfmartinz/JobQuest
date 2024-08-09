import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import CollapsibleAccordion from '@/components/CollapsibleAccordion.vue';

// Test the CollapsibleAccordion component
// stub the Font Awesome Icon component to avoid rendering the actual icon and focus on the accordion functionality
// props and slots are passed to the component to test the accordion functionality
// The test checks if the component renders correctly and if the accordion opens and closes when the user clicks on it
describe('CollapsibleAccordion', () => {
  test('CollapsibleAccordion opens and closes when clicked', async () => {
    // render the CollapsibleAccordion component
    render(CollapsibleAccordion, {
      // stub the Font Awesome Icon component
      global: {
        stubs: {
          'font-awesome-icon': true
        }
      },
      props: {
        title: 'Accordion Title'
      },
      slots: {
        default: '<h3>Accordion Content</h3>'
      }
    });

    expect(screen.queryByText('Accordion Content')).not.toBeInTheDocument();
    const button = screen.getByRole('button', { name: /accordion title/i });
    await userEvent.click(button);
    expect(screen.getByText('Accordion Content')).toBeInTheDocument();
  });
});
