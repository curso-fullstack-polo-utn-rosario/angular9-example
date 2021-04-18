import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent{

  @Output() newTask = new EventEmitter<any>();

  add(inputControl){
      if (inputControl.value === '') {
        return;
      }

      const task = {
        description: inputControl.value,
       completed: false
     }

     this.newTask.emit(task);
     inputControl.value = '';
  }
}
