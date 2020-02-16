import {
  GET_EPISODES,
  GET_SHOWS,
  IEpisode,
  IShow,
  ShowsActionTypes,
} from 'src/types/shows.types';

// TypeScript infers that this function is returning SendMessageAction
export const getShows = (shows: IShow[]): ShowsActionTypes => {
  return {
    type: GET_SHOWS,
    payload: shows,
  };
};
// TypeScript infers that this function is returning DeleteMessageAction
export const getEpisodes = (episodes: IEpisode[]): ShowsActionTypes => {
  return {
    type: GET_EPISODES,
    payload: episodes,
  };
};
