import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-another-video',
  templateUrl: './another-video.component.html',
  styleUrls: ['./another-video.component.scss']
})
export class AnotherVideoComponent implements OnInit {

  constructor(private authentication : AuthenticationService) { }

  ngOnInit(): void {
    this.authentication.toggleIsSecondVideoVisited(); 
    
  }

}
