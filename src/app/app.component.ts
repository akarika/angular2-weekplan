import { Component, OnInit } from '@angular/core';
import { CrudLocalstorageService } from './services/crud-localstorage.service';
import {Task} from'./grid/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  task: Task[]
  title = 'app works!';
  constructor(private CrudLocalstorageService: CrudLocalstorageService) {

  }
  ngOnInit() {
    this.task = this.CrudLocalstorageService.getTasks()
    console.log('AppComponent init', this.task);
  }
}
