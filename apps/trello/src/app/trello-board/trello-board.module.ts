import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TrelloBoardRoutingModule } from './trello-board-routing.module';
import { UiModule } from '../../../../../libs/ui/src/lib/ui.module';
import { BoardComponent } from './board/board.component';
import { RcItemComponent } from '../../../../../libs/ui/src/lib/rc-item/rc-item.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [BoardComponent, DetailsComponent],
  imports: [
    CommonModule,
    TrelloBoardRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    UiModule
  ],
  exports: [TrelloBoardRoutingModule, BoardComponent, DetailsComponent],
  entryComponents: [
    RcItemComponent,
  ],
})
export class TrelloBoardModule { }
