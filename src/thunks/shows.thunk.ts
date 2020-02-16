import { IShow } from 'src/types/shows.types';
import { loadShowsById } from 'src/services/shows.service';
import { getShows } from 'src/actions/shows.actions';
import {AppThunk} from 'src/types/global.types';

export const thunkGetShowsById = (
  id: string,
): AppThunk => async (dispatch) => {
  const asyncResp: IShow[] = await loadShowsById(id);
  dispatch(getShows(asyncResp));
};
