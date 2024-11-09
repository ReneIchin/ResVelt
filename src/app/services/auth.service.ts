import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private issLoogedIn = false;

  constructor() { }

  login(){
    this.issLoogedIn = true;
  }

  logout(){
    this.issLoogedIn = false;
  }

  isAuthenticated() : Boolean {
    return this.issLoogedIn;
  }


}
