import {IEpisode, IShow} from 'src/types/show.types';
import {loadEpisodesById, loadShowById} from 'src/services/show.service';
import {setEpisodes, setShow} from 'src/actions/show.actions';
import {AppThunk} from 'src/types/global.types';

export const thunkGetShowById = (
  id: string,
): AppThunk => async (dispatch) => {
  const asyncResp: IShow = await loadShowById(id);
  dispatch(setShow(asyncResp));
};

export const thunkGetEpisodesById = (
    id: string,
): AppThunk => async (dispatch) => {
    const asyncResp: IEpisode[] = await loadEpisodesById(id);
    dispatch(setEpisodes(asyncResp));
};
