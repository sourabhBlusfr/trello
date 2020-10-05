import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcItemComponent } from './rc-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CardComponent', () => {
  let component: RcItemComponent;
  let fixture: ComponentFixture<RcItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RcItemComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatInputModule,
        DragDropModule,
        ReactiveFormsModule,
        MatCardModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcItemComponent);
    component = fixture.componentInstance;
    component.content = [{
      id: 'T0',
      name: 'Test1',
      items: []
    },
    {
      id: 'T1',
      name: 'Test2',
      items: []
    }];
    component.cardIndex = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check drop()', () => {
    jest.spyOn(component, 'drop');
    let event: any = {
      previousContainer: { data: [] },
      container: { data: [] },
      previousIndex: 1,
      currentIndex: 2
    };
    component.drop(event);
  });

  it('should check onFormSubmit', () => {
    jest.spyOn(component.emitItemList, 'emit');
    component.userForm.controls['cardItem'].setValue('Test');
    let val  = {item: component.userForm.value, cardIndex: component.cardIndex};
    component.onFormSubmit();
    expect(component.emitItemList.emit).toHaveBeenCalledWith(val);
  });
});
