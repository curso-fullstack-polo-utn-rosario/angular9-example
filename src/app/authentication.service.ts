import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginState : boolean;
  isFirstVideoVisited :boolean;
  isSecondVideoVisited :boolean;

  constructor() { 
    this.loginState = false;
    this.isFirstVideoVisited = false;
    this.isSecondVideoVisited = false;
  }

  toggleIsFirstVideoVisited(){
    this.isFirstVideoVisited = !this.isFirstVideoVisited;
    console.log("custom1" , this.isFirstVideoVisited); 
  }


  toggleIsSecondVideoVisited(){
    this.isSecondVideoVisited = true;
    console.log("custom2", this.isSecondVideoVisited);
  }


  toggleLoginState(){
    
    this.loginState = true;
    console.log(this.loginState);
    
  }

  getLoginState(){
    return this.loginState;
  }
}
