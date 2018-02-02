import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(private http: Http, private router: Router) {
  }

  login(credentials) { 
   return this.http.post('http://localhost/i4.php', JSON.stringify(credentials))
   .map(
       response=>{
           let res = response.json();
           if(res && res.token){
               localStorage.setItem('token', res.token);
               return true;
           }
           return false;
       }
    );
  }

  logout() { 
    localStorage.clear();
    this.router.navigate(['/loggedout']);    
  }

  isLoggedIn() { 
    var token = localStorage.getItem('token');
    if (token == null) return false;
    var expired = this.jwtHelper.isTokenExpired(token);
    return !expired;
  }
  
  getUsername(){
    var token = localStorage.getItem('token');
    if(token == null){
        return " stranger";
      } else {
      console.log(
        this.jwtHelper.decodeToken(token).username,
        this.jwtHelper.getTokenExpirationDate(token),
        this.jwtHelper.isTokenExpired(token)
      );
      return this.jwtHelper.decodeToken(token).username;
    }
  }  
} 