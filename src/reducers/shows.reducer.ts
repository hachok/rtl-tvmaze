import { GET_SHOW, IShow, ShowsActionTypes } from 'src/types/shows.types';

export type IShowState = IShow;

const initialState = {
  name: '',
  summary: '',
  episodes: [],
};

export const showsReducer = (
  state: IShowState = initialState,
  action: ShowsActionTypes,
): IShowState => {
  switch (action.type) {
    case GET_SHOW:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
