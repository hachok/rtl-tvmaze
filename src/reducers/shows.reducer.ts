import { GET_SHOWS, IShow, ShowsActionTypes } from 'src/types/shows.types';

export interface IShowsState {
  readonly list: IShow[];
  readonly selected: IShow;
}

const initialState = {
  list: [],
  selected: {
    title: '',
    summary: '',
    episodes: [],
  },
};

export const showsReducer = (
  state: IShowsState = initialState,
  action: ShowsActionTypes,
): IShowsState => {
  switch (action.type) {
    case GET_SHOWS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
