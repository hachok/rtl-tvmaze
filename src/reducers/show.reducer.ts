import { SET_EPISODES, SET_SHOW, IShow, ShowsActionTypes } from 'src/types/show.types';

export type IShowState = IShow;

const initialState: IShowState = {
  id: '',
  name: '',
  summary: '',
  image: {
    medium: '',
    original: '',
  },
  episodes: [],
};

export const showReducer = (
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
