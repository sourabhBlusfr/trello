import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AppState } from '../reducers';
import { BoardActionTypes, LoadBoard } from '../actions/board.actions';
import * as boardActions from '../actions/board.actions';
import { DataPersistence } from '@nrwl/angular';

@Injectable()
export class BoardEffects {

  @Effect() loadBoard$ = this.dataPersistence.fetch(
    BoardActionTypes.LoadBoard,
    {
      run: (action: LoadBoard, state: AppState) => {
        return new boardActions.LoadBoard({ boardData: [] });
      },
    }
  );

  constructor(
    private dataPersistence: DataPersistence<AppState>
  ) { }
}