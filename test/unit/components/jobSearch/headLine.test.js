import { render, screen } from '@testing-library/vue';

import HeadLine from '@/components/jobSearch/HeadLine.vue';
import { nextTick } from 'vue';
import { afterEach, beforeEach } from 'vitest';

describe('HeadLine', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('displays introductory action verb', () => {
    render(HeadLine);

    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i
    });

    expect(actionPhrase).toBeInTheDocument();
  });

  it('changes action verb at a consistent interval', () => {
    const mock = vi.fn();
    vi.stubGlobal('setInterval', mock);

    render(HeadLine);

    expect(mock).toHaveBeenCalled();
  });

  it('swaps action verb after interval', async () => {
    render(HeadLine);

    vi.advanceTimersToNextTimer();

    await nextTick();

    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i
    });

    expect(actionPhrase).toBeInTheDocument();
  });
});
