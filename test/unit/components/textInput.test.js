import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import TextInput from '@/components/TextInput.vue';

describe('TextInput', () => {
  it('communicates that user has entered character', async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: ''
      }
    });
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'NYC');
    const chars = emitted()['update:modelValue'];
    expect(chars).toEqual([['N'], ['NY'], ['NYC']]);
  });
});
