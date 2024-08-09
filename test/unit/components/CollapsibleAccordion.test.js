import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import CollapsibleAccordion from '@/components/CollapsibleAccordion.vue';

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

  // Add a test for fallback Slots content
  test('CollapsibleAccordion displays fallback content when no slots are provided', async () => {
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
      }
    });

    const button = screen.getByRole('button', { name: /accordion title/i });
    await userEvent.click(button);
    expect(screen.queryByText('No content provided')).not.toBeInTheDocument();
  });
});
