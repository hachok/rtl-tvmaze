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
  id: string;
  name: string;
  summary: string;
  image: IShowImage;
  episodes: IEpisode[];
}

interface IShowImage {
  medium: string;
  original: string;
}

export interface IEpisode {
  id: string;
  title: string;
  summary: string;
  image: string;
}
