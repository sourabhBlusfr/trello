import { Action } from '@ngrx/store';
import { BoardData } from '../data';

export enum BoardActionTypes {
  LoadBoard = '[Home Page] Load Board',
  BoardLoadError = '[Board] Board Load Error',
}

export class BoardAction implements Action {
  type: string;
  payload: {
    boardData: BoardData
  };
}

export class LoadBoard implements Action {
  readonly type = BoardActionTypes.LoadBoard;
  constructor(readonly payload: {boardData: BoardData}) {
  }
}

export class BoardLoadError implements Action {
  readonly type = BoardActionTypes.BoardLoadError;
  constructor(public payload: any) { }
}

export type BoardActions = LoadBoard;