import { Injectable } from "@angular/core";
import { Credentials } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    isLogged = false;

    constructor() {
        
    }
    signIn(credentials: Credentials) {
        this.isLogged=true;
        return true;
    }
  }