import axios, { AxiosResponse } from 'axios';
import { httpConfig } from 'src/utils/http';
import {IEpisode, IShow} from 'src/types/shows.types';
import {API_URL} from 'src/constants';

export const loadShowById = (id: string): Promise<IShow> =>
  axios.get(`${API_URL}/shows/${id}`, httpConfig()).then((res: AxiosResponse) => res.data);

export const loadEpisodesById = (id: string): Promise<IEpisode[]> =>
  axios.get(`${API_URL}/shows/${id}/episodes`, httpConfig()).then((res: AxiosResponse) => res.data);
