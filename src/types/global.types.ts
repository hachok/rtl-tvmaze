import { Action } from 'redux';
import { IRootState } from 'src/reducers';
import { ThunkAction } from 'redux-thunk';

export const API_URL = 'http://api.tvmaze.com';

export interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;
