import {
  GET_EPISODES,
  GET_SHOW,
  IEpisode,
  IShow,
  ShowsActionTypes,
} from 'src/types/shows.types';

// TypeScript infers that this function is returning SendMessageAction
export const getShow = (show: IShow): ShowsActionTypes => {
  return {
    type: GET_SHOW,
    payload: show,
  };
};
// TypeScript infers that this function is returning DeleteMessageAction
export const getEpisodes = (episodes: IEpisode[]): ShowsActionTypes => {
  return {
    type: GET_EPISODES,
    payload: episodes,
  };
};
