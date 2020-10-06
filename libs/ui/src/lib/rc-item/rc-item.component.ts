import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'trello-poc-rc-item',
  templateUrl: './rc-item.component.html',
  styleUrls: ['./rc-item.component.scss']
})
export class RcItemComponent implements OnInit {

  @Input() content;
  @Input() cardIndex;
  @Output() emitItemList = new EventEmitter<any>();
  @Output() openDetails = new EventEmitter<any>();
  items: string[] = [];
  cardName: string;

  constructor() { }

  ngOnInit(): void {
    
    this.items = this.content[this.cardIndex]['items'];
    this.cardName = this.content[this.cardIndex].name;
  }

  userForm = new FormGroup({
    cardItem: new FormControl('', Validators.required)
  });

  drop(event: CdkDragDrop<string[]>) {
    
    
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      this.emitItemList.emit({item: this.userForm.value, cardIndex: this.cardIndex});
      this.userForm.reset();
    }
  }

  navigateToDetails(){
    this.openDetails.emit();
  }

  deleteItem(index){
    this.items.splice(index, 1); 
  }

  deleteCard(){ 
    this.content.splice(this.cardIndex, 1);
  }
}
