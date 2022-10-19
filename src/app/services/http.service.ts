import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoItem } from '../interfaces/todo-item';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  BASE_URL: string = environment.API_URL;
  USER_URL: string = environment.USER_URL;

  constructor(private http: HttpClient) {}

  getTodoItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.BASE_URL);
  }

  getTodoItem(id: number): Observable<TodoItem> {
    return this.http.get<TodoItem>(this.BASE_URL + '/' + id)
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.USER_URL + '/' + id)
  }
}
