import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RcItemComponent } from './rc-item/rc-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatButtonModule, MatIconModule, MatCardModule, MatInputModule, DragDropModule],
  declarations: [RcItemComponent],
  exports: [RcItemComponent],
  entryComponents: [
    RcItemComponent,
  ],
})
export class UiModule { }
