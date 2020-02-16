import {SET_EPISODES, SET_SHOW, IShow, ShowsActionTypes} from 'src/types/shows.types';

export type IShowState = IShow;

const initialState = {
  name: '',
  summary: '',
  image: '',
  episodes: [],
};

export const showsReducer = (
  state: IShowState = initialState,
  action: ShowsActionTypes,
): IShowState => {
  switch (action.type) {
    case SET_SHOW:
      return { ...state, ...action.payload };
    case SET_EPISODES:
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};
