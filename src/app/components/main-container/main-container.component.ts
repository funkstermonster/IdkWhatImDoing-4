import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/todo-item';
import { User } from 'src/app/interfaces/user';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  emittedTodo?: TodoItem
  emittedUser?: User
  constructor(private todoDataService: TodoDataService) { }

  ngOnInit(): void {
  }

  receiveTodo(receivedTodo: any) {
     this.todoDataService.todoItem = receivedTodo
  }

  receiveUser(receivedUser: any) {
    this.emittedUser = receivedUser
  }

}
