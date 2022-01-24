import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralHelperServiceService {

  sessionCookie: string;
  constructor() {
 
  }

  setLangStorageSession(value: string) {
    localStorage.setItem("lang", value);
  }

  getLangStorageSession() {
    return localStorage.getItem("lang");
  }
  
}
