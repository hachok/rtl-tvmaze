import { IRootState } from 'src/reducers';
import { IShowState } from 'src/reducers/show.reducer';
import { createSelector } from 'reselect';

export const getShow = (state: IRootState): IShowState => state.show;

export const getEpisodes = createSelector(getShow, (show) => show.episodes);
