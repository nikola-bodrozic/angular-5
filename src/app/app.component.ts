import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'nb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'nb';

  constructor(private as: AuthService) { }
}
