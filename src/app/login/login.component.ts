import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'nb-login',
  template: `
<form #f="ngForm" (ngSubmit)="signIn(f.value)">
  <h2>Please sign in</h2>
  <input type="email" id="email" name="email" ngModel placeholder="Email address" required autofocus>
  <input type="password" id="password" name="password" ngModel placeholder="Password" required>
  <button type="submit" id="submit">Sign in</button>
</form>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router, 
    private authService: AuthService, 
    private route: ActivatedRoute
   ) { }

  ngOnInit() {
  }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result) {
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);          
        }
        else
          this.router.navigate(['/login']);
      });
  }
}
