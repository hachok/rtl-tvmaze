// constants
export const GET_SHOW = 'GET_SHOW';
export const GET_EPISODES = 'GET_EPISODES';

// actions types
interface GetShowByIdAction {
  type: typeof GET_SHOW;
  payload: IShow;
}
interface GetEpisodesByIdAction {
  type: typeof GET_EPISODES;
  payload: IEpisode[];
}

export type ShowsActionTypes = GetShowByIdAction | GetEpisodesByIdAction;

// interfaces
export interface IShow {
  name: string;
  summary: string;
  episodes: IEpisode[];
}

export interface IEpisode {
  title: string;
  summary: string;
}
