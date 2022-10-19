import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/todo-item';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  emittedTodo?: TodoItem
  emittedUser?: User
  constructor() { }

  ngOnInit(): void {
  }

  receiveTodo(receivedTodo: any) {
    this.emittedTodo = receivedTodo
  }

  receiveUser(receivedUser: any) {
    this.emittedUser = receivedUser
  }

}
