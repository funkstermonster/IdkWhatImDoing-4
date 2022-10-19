import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  BASE_URL = environment.API_URL;
  loggedIn: boolean = false;

  constructor(private http: HttpClient, public router: Router) {}

  getUser() {
    return this.http.get<User[]>(this.BASE_URL + 'users');
  }

  login(user: { username: string; password: string }) {
    this.getUser().subscribe((users) => {
      const userExists = users.find(
        (u) => u.username === user.username && u.password === user.password
      );
      if (userExists) {
        this.loggedIn = true;
        this.router.navigate(['/home']);
      } else {
        console.log('Login failed, invalid credentials.');
      }
    });
  }

  logout() {
    this.loggedIn = false;
  }
}
