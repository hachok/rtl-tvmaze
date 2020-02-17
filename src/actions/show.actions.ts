import { SET_EPISODES, SET_SHOW, IEpisode, IShow, ShowsActionTypes } from 'src/types/show.types';

// TypeScript infers that this function is returning SendMessageAction
export const setShow = (show: IShow): ShowsActionTypes => {
  return {
    type: SET_SHOW,
    payload: show,
  };
};
// TypeScript infers that this function is returning DeleteMessageAction
export const setEpisodes = (episodes: IEpisode[]): ShowsActionTypes => {
  return {
    type: SET_EPISODES,
    payload: episodes,
  };
};
