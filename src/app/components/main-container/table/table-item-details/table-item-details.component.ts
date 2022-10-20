import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/interfaces/todo-item';
import { User } from 'src/app/interfaces/user';
import { HttpService } from 'src/app/services/http.service';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-table-item-details',
  templateUrl: './table-item-details.component.html',
  styleUrls: ['./table-item-details.component.scss']
})
export class TableItemDetailsComponent {

  @Input() user?: User;

  constructor(public todoDataService: TodoDataService) {}
  //async subtodo?

}
