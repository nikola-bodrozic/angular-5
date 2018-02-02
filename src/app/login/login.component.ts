import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'nb-login',
  template: `
<form #f="ngForm" (ngSubmit)="signIn(f.value)">
  <h2>Please sign in</h2>
  <input type="email" id="inputEmail" name="email" ngModel placeholder="Email address" required autofocus>
  <input type="password" id="inputPassword" name="password" ngModel placeholder="Password" required>
  <button type="submit">Sign in</button>
</form>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result) this.router.navigate(['/']);
      });
  }
}
