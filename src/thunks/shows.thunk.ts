import {IEpisode, IShow} from 'src/types/shows.types';
import {loadEpisodesById, loadShowsById} from 'src/services/shows.service';
import {getEpisodes, getShows} from 'src/actions/shows.actions';
import {AppThunk} from 'src/types/global.types';

export const thunkGetShowsById = (
  id: string,
): AppThunk => async (dispatch) => {
  const asyncResp: IShow[] = await loadShowsById(id);
  dispatch(getShows(asyncResp));
};

export const thunkGetEpisodesById = (
    id: string,
): AppThunk => async (dispatch) => {
    const asyncResp: IEpisode[] = await loadEpisodesById(id);
    dispatch(getEpisodes(asyncResp));
};
