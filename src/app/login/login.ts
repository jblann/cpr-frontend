import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'login',
  styles: [`form {margin-top: 20px;}`],
  template: require('./login.html')
})
export class LoginComponent {
  details = { username: '', password: '' };
  error: boolean = false;
  errorMessage: string;

  constructor(public auth: Authentication, public router: Router) {
    this.auth.logout();
  }

  onSubmit() {
    this.auth.login(this.details.username, this.details.password)
      .subscribe(
        (token: any) => this.router.navigate(['']),
        (error: any) => {
          console.log(error);
          this.error = true;
          this.errorMessage = error.status === 401 ?
             'Bad username and/or password' : 'Unable to login';
        }
      );
  }
}
