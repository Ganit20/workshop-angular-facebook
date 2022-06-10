import { Injectable } from "@angular/core";
import { Credentials, UserData } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    isLogged:boolean = false;

    constructor() {
        
    }
    signIn(credentials: Credentials) {
        this.isLogged=true;
        return true;
    }
    
    signOut() {
        this.isLogged=false;
        return true;
    }

    addUser(user:UserData) {
        return true;
    }
  }