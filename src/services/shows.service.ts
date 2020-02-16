import axios, { AxiosResponse } from 'axios';
import { API_URL } from 'src/types/global.types';
import { httpConfig } from 'src/utils/http';
import { IShow } from 'src/types/shows.types';

export const loadShowsById = (id: string): Promise<IShow[]> =>
  axios.get(`${API_URL}/shows/${id}`, httpConfig()).then((res: AxiosResponse) => res.data);

export const loadEpisodesById = (id: string): Promise<IShow[]> =>
  axios.get(`${API_URL}/shows/${id}/episodes`, httpConfig()).then((res: AxiosResponse) => res.data);
