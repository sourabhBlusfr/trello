import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { BoardEffects } from './board.effects';
import { LoadBoard } from '../actions/board.actions';
import * as boardActions from '../actions/board.actions';


describe('AppEffects', () => {
  let actions: Observable<any>;
  let effects: BoardEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        BoardEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(BoardEffects);
  });

  describe('loadBoard$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadBoard({ boardData: 3 }) });
      expect(effects.loadBoard$).toBeObservable(
        hot('-a-|', { a: new boardActions.LoadBoard({ boardData: [] }) })
      );
    });
  });
});
