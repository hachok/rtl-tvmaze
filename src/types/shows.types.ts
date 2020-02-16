// constants
export const SET_SHOW = 'SET_SHOW';
export const SET_EPISODES = 'SET_EPISODES';

// actions types
interface SetShowByIdAction {
  type: typeof SET_SHOW;
  payload: IShow;
}
interface SetEpisodesByIdAction {
  type: typeof SET_EPISODES;
  payload: IEpisode[];
}

export type ShowsActionTypes = SetShowByIdAction | SetEpisodesByIdAction;

// interfaces
export interface IShow {
  name: string;
  summary: string;
  image: string;
  episodes: IEpisode[];
}

export interface IEpisode {
  title: string;
  summary: string;
  image: string;
}
