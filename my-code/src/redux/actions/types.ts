import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../reducers';

export type ReduxThunkAction = ThunkAction<void, RootState, null, AnyAction>;
export type ReduxThunkDispatch = ThunkDispatch<{}, {}, AnyAction>;
