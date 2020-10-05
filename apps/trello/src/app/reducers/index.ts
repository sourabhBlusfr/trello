import { ActionReducerMap, MetaReducer, Action} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { BoardData } from '../data';
import { BoardActionTypes, BoardAction } from '../actions/board.actions';

export interface BoardState {
  boardData: BoardData| null;
}

export const initialBoardState: BoardState = {
  boardData: null
};

export interface AppState {
  board: BoardState;
}

export function boardReducer(state: BoardState = initialBoardState, action: BoardAction): BoardState {
  switch (action.type) {
    case BoardActionTypes.LoadBoard:
      return {
        boardData: action.payload.boardData
      };

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {

  board: boardReducer
};

export const selectBoard = (state: AppState) => state.board.boardData;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];