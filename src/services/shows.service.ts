import axios, { AxiosResponse } from 'axios';
import { API_URL } from 'src/types/global.types';
import { httpConfig } from 'src/utils/http';
import { IShow } from 'src/types/shows.types';

export const loadShowsById = (id: string): Promise<IShow[]> =>
  axios
    .get(`${API_URL}/search/people?q=${id}`, httpConfig())
    .then((res: AxiosResponse) => res.data);
