import { Action } from 'redux';
import { IRootState } from 'src/reducers';
import { ThunkAction } from 'redux-thunk';
import {RouteComponentProps} from 'react-router';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;

interface MatchParams {
  id: string;
}

export type MatchProps = RouteComponentProps<MatchParams>;
