import { render, screen } from '@testing-library/vue';

import axios from 'axios';
import SpotLight from '@/components/JobSearch/SpotLight.vue';

vi.mock('axios');

describe('SpotLight', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Spotlight Title',
          img: 'Some Image URL',
          description: 'Spotlight Description'
        }
      ]
    });
  });

  // Test the image slot
  it('renders the image slot', async () => {
    // Render the component
    render(SpotLight, {
      slots: {
        default: `<template #default="{img}">
        <h1>{{img}}</h1>
        </template>
        `
      }
    });

    const imageElement = await screen.findByText('Some Image URL');
    expect(imageElement).toBeInTheDocument();
  });

  it('renders the title slot', async () => {
    // Render the component
    render(SpotLight, {
      slots: {
        default: `<template #default="{title}">
        <h1>{{title}}</h1>
        </template>
        `
      }
    });

    const titleElement = await screen.findByText('Spotlight Title');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the description slot', async () => {
    // Render the component
    render(SpotLight, {
      slots: {
        default: `<template #default="{description}">
        <h1>{{description}}</h1>
        </template>
        `
      }
    });

    const descElement = await screen.findByText('Spotlight Description');
    expect(descElement).toBeInTheDocument();
  });
});
