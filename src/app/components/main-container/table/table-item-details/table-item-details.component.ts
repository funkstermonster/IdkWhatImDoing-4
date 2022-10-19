import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/interfaces/todo-item';
import { User } from 'src/app/interfaces/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-table-item-details',
  templateUrl: './table-item-details.component.html',
  styleUrls: ['./table-item-details.component.scss']
})
export class TableItemDetailsComponent {

  @Input() todoItem?: TodoItem

  @Input() user?: User;

  constructor() {}


}
