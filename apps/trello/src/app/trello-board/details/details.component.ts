import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectBoard } from '../../reducers';

@Component({
  selector: 'trello-poc-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['id', 'name', 'count'];

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.getBoartState();
  }

  getBoartState() {
    this.store.pipe(select(selectBoard)).subscribe(result => {
      this.dataSource = result;
    });
  }

  onBack() {
    this.router.navigate(['/board']);
  }
}
