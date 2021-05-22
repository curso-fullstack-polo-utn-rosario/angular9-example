import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: any[];
  @Output() itemRemoved = new EventEmitter();
  @Output() itemStateChanged = new EventEmitter();
  @Output() itemEditSaved = new EventEmitter();

  /*
    no se como hacer para que el [hidden] actue individualmente adentro del ng for
  
  */ 


  hiddenEdit = true;

  constructor() { }

  ngOnInit() {
    
  }
  removeItem(id) {
    this.itemRemoved.emit(id);
  }

  completeTask(item:TodoItem) {
    this.itemStateChanged.emit(item);

  }

  onEditTask(task){
    task.hiddenEdit = !task.hiddenEdit;
  }

  onSaveEditedTask(value,task){

    let editedTodo = new TodoItem;
    editedTodo.id = task.id;
    editedTodo.description = value;
    editedTodo.hiddenEdit = true;
    task.hiddenEdit = !task.hiddenEdit;
    this.itemEditSaved.emit(editedTodo)
  }

}