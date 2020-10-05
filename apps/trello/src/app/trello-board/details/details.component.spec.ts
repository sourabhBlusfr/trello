import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { UiModule } from '../../../../../../libs/ui/src/lib/ui.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../../reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { BoardComponent } from '../board/board.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent, BoardComponent],
      imports: [MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'details', component: DetailsComponent },
          {
            path: 'board',
            component: BoardComponent
          }]),
        StoreModule.forRoot(reducers, { metaReducers }),
        UiModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to board page()', () => {
    const routerNavigateSpy = jest.spyOn(router, 'navigate').mockImplementation(() => of(true).toPromise());;
    component.onBack();
    expect(routerNavigateSpy).toHaveBeenCalledWith(['/board']);
  });
});