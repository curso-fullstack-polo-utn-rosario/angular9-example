import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

  constructor(private authentication :AuthenticationService, private router :  Router) { 

    
  }

  ngOnInit(): void {
  }

  onLogin(){
    this.authentication.toggleLoginState();
    this.router.navigate(['/full_access']);
 
  }

}
