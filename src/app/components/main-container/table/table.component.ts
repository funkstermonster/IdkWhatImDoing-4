import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/todo-item';
import { User } from 'src/app/interfaces/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  todoItems: TodoItem[] = []

  @Output() selectedTodoEmitter: EventEmitter<TodoItem> = new EventEmitter()
  @Output() userEmitter: EventEmitter<User> = new EventEmitter()

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getTodoItems().subscribe(data => {
      this.todoItems = data
    })
  }

  emitSelectedTodo(selectedTodo: TodoItem): void {
    let user: User;
    if (selectedTodo.userId) {
      this.httpService.getUserById(selectedTodo.userId).subscribe((data: User) => {
        user = data
        this.userEmitter.emit(user)
      })
    }
    this.selectedTodoEmitter.emit(selectedTodo)
  }

}
