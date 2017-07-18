import { Injectable } from '@angular/core';
import { Task } from '../grid/task';
@Injectable()
export class CrudLocalstorageService {
  tasks: Task[] = [
    { id: 1, title: 'Installer dragula', description: 'Banzai', creationDate: new Date(), isDeleted: false }, { id: 2, title: 'Installer Windows', description: 'Toto', creationDate: new Date(), isDeleted: false }

  ];

  constructor() { }

  getTasks() {
   /*  this.tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!this.tasks) {
      this.tasks = [];
    } */
    return this.tasks;
  }

}
