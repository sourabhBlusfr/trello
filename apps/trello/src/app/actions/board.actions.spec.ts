import * as BoardActions from './board.actions';
import {
  AppState,
  boardReducer,
  initialBoardState
} from '../reducers/index';

describe('Board', () => {
  
  it('should create an instance', () => {
    expect(new BoardActions.BoardAction()).toBeTruthy();
    expect(new BoardActions.BoardLoadError('')).toBeTruthy();
  });
});
