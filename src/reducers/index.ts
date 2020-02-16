import { combineReducers } from 'redux';
import { IShow } from 'src/types/shows.types';
import { showsReducer } from 'src/reducers/shows.reducer';

export interface IRootState {
  shows: IShow[];
}

const reducers = combineReducers({
  shows: showsReducer,
});

export default reducers;
