import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { UiModule } from '../../../../../../libs/ui/src/lib/ui.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, metaReducers, AppState } from '../../reducers';
import { of } from 'rxjs';
import { DetailsComponent } from '../details/details.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of('add')
    };
  }
}

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let router: Router;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent, DetailsComponent],
      providers: [{ provide: MatDialog, useClass: MatDialogMock }],
      imports: [
        MatToolbarModule,
        MatTableModule,
        MatInputModule,
        MatDialogModule,
        DragDropModule,
        RouterTestingModule.withRoutes([{
          path: 'board',
          component: BoardComponent
        },
        { path: 'details', component: DetailsComponent }]),
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        UiModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(
      'TRELLO POC'
    );
  });

  it('should check addCard()', () => {
    component.boardContent = [];
    component.boardName = 'Test';
    component.addCard();
    fixture.detectChanges();
    expect(component.boardContent.length).toBe(1);
  });

  it('should navigate to details page()', () => {
    const routerNavigateSpy = jest.spyOn(router, 'navigate').mockImplementation(() => of(true).toPromise());;
    component.openDetails();
    expect(routerNavigateSpy).toHaveBeenCalledWith(['/details']);
  });

  it('should check fetchItems()', () => {
    component.boardContent = [{
      id: 'T0',
      name: 'Test',
      items: []
    }];
    let items = { item: 'Hello', cardIndex: 0 }
    component.boardName = 'Test';
    component.fetchItems(items);
    fixture.detectChanges();
    expect(component.boardContent.length).toBe(1);
  });
});