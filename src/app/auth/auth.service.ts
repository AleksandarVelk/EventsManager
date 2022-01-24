import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import IAuthService from "./auth.interface";
import { Router } from "@angular/router";
import { User } from "../models/user.model";
@Injectable({
  providedIn: "root",
})
export class AuthService implements IAuthService {
  private _isLoggedIn = false;
  headerOptions: any = null;
  private authHeaders = new HttpHeaders({
    type: 'application/json',
  });

  private _currentUser: User = null;
  // getter and setter for current user
  public isAuthenticated: boolean = false;
  get currentUser(): User {
    if (!this._currentUser) {
      this._currentUser = this.getStorageUser();
    }
    return this._currentUser;
  }
  set currentUser(v: User) {
    this.setStorageUser(v);
    this._currentUser = v;
  }

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(userCredentials: User) {
    let user = JSON.parse(this.getNewUserLocalStorageSession());
    let credentials = JSON.parse(JSON.stringify(userCredentials));

    if (user.username === credentials.username && user.password === credentials.password) {
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  registerUser(newuser: User) {
    this.setNewUserLocalStorageSession(JSON.stringify(newuser));
    return true;
  }

  setNewUserLocalStorageSession(value: string) {
    localStorage.setItem("userLocalStorage", value);
  }

  getNewUserLocalStorageSession() {
    return localStorage.getItem("userLocalStorage");
  }

  removeNewUserLocalStorageSession() {
    return localStorage.removeItem("userLocalStorage");
  }

  logoutUser() {
    this.removeLocalStorageSession();
    this.isAuthenticated = false;
    this.router.navigate(["/login"]);
  }

  // getter and setter for the auth status
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  set isLoggedIn(v: boolean) {
    this._isLoggedIn = v;
  }

  // implicit getter and setter for the session cookie
  setLocalStorageSession(value: string) {
    localStorage.setItem("eventLocalStorage", value);
  }

  getLocalStorageSession() {
    return localStorage.getItem("eventLocalStorage");
  }

  removeLocalStorageSession() {
    return localStorage.removeItem("eventLocalStorage");
  }

  // implicit getter and setter for the user cookie
  setStorageUser(value: User) {
    localStorage.setItem("user", JSON.stringify(value));
  }

  getStorageUser(): User {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : new User();
  }
}
