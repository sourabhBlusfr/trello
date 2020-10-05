import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as boardActions from '../../actions/board.actions';
import { AppState, selectBoard } from '../../reducers';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'trello-poc-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @ViewChild('callDialog') callDialog: TemplateRef<any>;
  boardContent: any[] = [];
  cardName: string;
  cardItems;
  boardName;

  constructor(private store: Store<AppState>, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBoardState();
  }

  getBoardState() {
    this.store.pipe(select(selectBoard)).subscribe((cards) => {
      if (cards) {
        this.boardContent = JSON.parse(JSON.stringify(cards));
      }
    });
  }

  addCard() {
    let dialogRef = this.dialog.open(this.callDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result === 'cancel') {
          console.log('User clicked yes.');
        } else if (result === 'add') {
          this.boardContent.push({
            id: 'id' + (this.boardContent.length + 1),
            name: this.boardName,
            items: []
          });
          this.boardName = '';
          this.updateState();
        }
      }
    })
  }

  openDetails() {
    this.updateState();
    this.router.navigate(['/details']);
  }

  fetchItems(items) {
    this.boardContent[items.cardIndex].items.push(items.item);
    this.updateState();
  }

  updateState() {
    this.cardItems = JSON.parse(JSON.stringify(this.boardContent));
    this.store.dispatch(new boardActions.LoadBoard({ boardData: this.cardItems }));
  }
}
