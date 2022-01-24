import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("passwordVisibilityToggler", { static: false }) eyeRef: ElementRef;
  returnUrl: string;
  redirectToLogin;
  errorMessage: boolean = false;
  toogleVal: boolean = true;
  mod: any;
  modValues = {
    login: {
      title: 'Sign in',
      description: 'You can type your username/password to login in the application',
      btn: "Sign in now",
      btnAction: "Register",
      descrR: "Create your account"
    },
    register: {
      title: 'Sign up',
      description: 'You can register in the application',
      btn: "Sign up now",
      btnAction: "Login",
      descrR: "Sign in to your account"
    }
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    document.body.style.backgroundColor = '#e4e5e6';
    this.toogleMode();
  }
  ngOnInit() {
    this.authService.logoutUser();
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  toogleMode() {
    this.toogleVal = !this.toogleVal;
    if (this.toogleVal) {
      this.mod = this.modValues.login;
    } else {
      this.mod = this.modValues.register;
    }
  }

  userAuth(userData: NgForm) {
    if (userData.form.status) {
      let user = JSON.stringify(userData.value);
      if (!this.toogleVal) {
        if (this.authService.loginUser(userData.value)) {
          this.errorMessage = false;
          this.authService.isLoggedIn = true;
          this.authService.setLocalStorageSession(user);
          return this.router.navigateByUrl(this.returnUrl);
        } else {
          this.errorMessage = true;
        }

      } else {
        let returnUser = this.authService.registerUser(userData.value);
        if (returnUser) {
          this.toogleMode();
          userData.form.reset();
        }
      }
    }
  }

}
