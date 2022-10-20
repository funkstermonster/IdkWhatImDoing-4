import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  selectedUser?: User;
  todoItem?: TodoItem;

  constructor() { }
}

