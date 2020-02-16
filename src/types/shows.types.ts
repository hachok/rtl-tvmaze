// constants
export const GET_SHOWS = 'GET_SHOW';
export const GET_EPISODES = 'GET_EPISODES';

// actions types
interface GetShowByIdAction {
  type: typeof GET_SHOWS;
  payload: IShow[];
}
interface GetEpisodesByIdAction {
  type: typeof GET_EPISODES;
  payload: IEpisode[];
}

export type ShowsActionTypes = GetShowByIdAction | GetEpisodesByIdAction;

// interfaces
export interface IShow {
  title: string;
  summary: string;
  episodes: IEpisode[];
}

export interface IEpisode {
  title: string;
  summary: string;
}
