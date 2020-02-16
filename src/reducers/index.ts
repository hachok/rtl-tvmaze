import { combineReducers } from 'redux';
import { IShow } from 'src/types/show.types';
import { showReducer } from 'src/reducers/show.reducer';

export interface IRootState {
  show: IShow;
}

const reducers = combineReducers<IRootState>({
  show: showReducer,
});

export default reducers;
