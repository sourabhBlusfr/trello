import * as BoardActions from '../actions/board.actions';
import {
    boardReducer,
    initialBoardState
} from '../reducers/index';

describe('Board', () => {

    it('should create an instance', () => {
        expect(new BoardActions.BoardAction()).toBeTruthy();
    });

    it('should return loadBoard', () => {
        const boardData = [{
            id: 'T0',
            name: 'Test',
            items: []
        }];
        const payload = {
            boardData: boardData
        }
        const action = new BoardActions.LoadBoard(payload);
        const result = boardReducer(initialBoardState, action);
        expect(result.boardData).toEqual([{ "id": "T0", "items": [], "name": "Test" }]);
    });
});
