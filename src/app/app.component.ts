import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 list = [];

add(task){
   this.list.push(task);
   
 }
 remove(item) {
   const index = this.list.findIndex(each => each.description === item.description);
   this.list.splice(index, 1);
 }

}

