import {IEpisode, IShow} from 'src/types/shows.types';
import {loadEpisodesById, loadShowById} from 'src/services/shows.service';
import {getEpisodes, getShow} from 'src/actions/shows.actions';
import {AppThunk} from 'src/types/global.types';

export const thunkGetShowById = (
  id: string,
): AppThunk => async (dispatch) => {
  const asyncResp: IShow = await loadShowById(id);
  dispatch(getShow(asyncResp));
};

export const thunkGetEpisodesById = (
    id: string,
): AppThunk => async (dispatch) => {
    const asyncResp: IEpisode[] = await loadEpisodesById(id);
    dispatch(getEpisodes(asyncResp));
};
