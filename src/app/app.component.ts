import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'nb-root',
  template: `
    <h1 class="red">
      Welcome to {{title}}!
    </h1>
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a *ngIf="!this.as.isLoggedIn()" routerLink="/login" routerLinkActive="active">Login</a>
      <button *ngIf="this.as.isLoggedIn()" (click)="this.as.logout()">Logout</button>
      <span>Hello {{ this.as.getUsername() }}</span>
    </nav>
    <br>
    <router-outlet></router-outlet>      
  `,
  styles: [`
      .red{
           color:red;
      }
  `]
})
export class AppComponent {
  title = 'nb';

  constructor(private as: AuthService) { }
}
