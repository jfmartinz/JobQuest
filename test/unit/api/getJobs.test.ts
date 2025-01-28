import axios from 'axios';
import getJobs from '@/api/getJobs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Mock } from 'vitest';

vi.mock('axios');
const mockAxios = axios.get as Mock;
describe('getJobs', () => {
  beforeEach(() => {
    mockAxios.mockResolvedValue({
      data: { id: 1, title: 'Software Engineer' }
    });
  });

  it('fetches job that candidates can apply to', async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/jobs');
  });

  it('returns a list of jobs', async () => {
    const jobs = await getJobs();
    expect(jobs).toEqual({ id: 1, title: 'Software Engineer' });
  });
});
