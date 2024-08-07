import axios from 'axios';
import getJobs from '@/api/getJobs';
import { beforeEach } from 'vitest';

vi.mock('axios');

describe('getJobs', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
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
