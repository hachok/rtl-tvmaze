import { combineReducers } from 'redux';
import { IShow } from 'src/types/shows.types';
import { showsReducer } from 'src/reducers/shows.reducer';

export interface IRootState {
  show: IShow;
}

const reducers = combineReducers<IRootState>({
  show: showsReducer,
});

export default reducers;
