import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  @Output() add = new EventEmitter();

  taskDescription = new FormControl('',Validators.required);
  taskUrl = new FormControl('',StartsWithAValidator);

  save(){
    if(!this.taskDescription.valid || !this.taskUrl.valid) {
      return;
    }
    let task = new TodoItem();
    task.description = this.taskDescription.value;
    task.isCompleted = false;
    this.add.emit(task);

   


    this.taskDescription.reset();
    this.taskUrl.reset();
  }
}

export function StartsWithAValidator(control: AbstractControl) {

  let validator = (control.value.startsWith('http://') || control.value.startsWith('https://'))

  if (!validator) {
    return { startsWithA: true };
  }
  return null;
}