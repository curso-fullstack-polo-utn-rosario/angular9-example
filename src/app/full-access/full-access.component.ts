import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-full-access',
  templateUrl: './full-access.component.html',
  styleUrls: ['./full-access.component.scss']
})
export class FullAccessComponent implements OnInit {

  constructor(private authentication : AuthenticationService) { }
  
  ngOnInit(): void {
    this.authentication.toggleIsFirstVideoVisited();
  }

  onSecondVideoBtn(){
    this.authentication.toggleIsSecondVideoVisited();
    
  }

}
