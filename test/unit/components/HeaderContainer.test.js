import { render, screen } from '@testing-library/vue';
import HeaderContainer from '@/components/HeaderContainer.vue';

describe('HeaderContainer', () => {
  it('should render the title slot', () => {
    render(HeaderContainer, {
      slots: {
        title: '<h2>Title</h2>'
      }
    });

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('should render the subtitle slot', () => {
    render(HeaderContainer, {
      slots: {
        subtitle: '<h3>Subtitle</h3>'
      }
    });

    expect(screen.getByText('Subtitle')).toBeInTheDocument();
  });
});
