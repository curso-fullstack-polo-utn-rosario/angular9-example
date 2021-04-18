import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent  {

  @Input() model;
  @Output() delete = new EventEmitter<any>();

  toggle(item) {
    item.completed = !item.completed
  }

  remove(item){
    this.delete.emit(item)
  }
}
