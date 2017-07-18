import { Component, OnInit , Input} from '@angular/core';
import { DragulaService , DragulaDirective} from 'ng2-dragula';
import { Task } from './task';
@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() tasks: Task[] ;
  todo: string = "1 - A faire";
  today: string = "2 - Aujourd'hui";
  inProgress: string = "3 - En cours";
  done: string = "4 - Fait";
  groups: any[];
  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });

    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });

    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });

    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }

  ngOnInit() {
     this.groups = [
      {
        name: this.todo, items: this.tasks
      },
      {
        name: this.today, items: []
      },
      {
        name: this.inProgress, items: []
      },
      {
        name: this.done, items: []
      }
    ]; 
  }
  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    console.log('onDrop args', args);
    let [e, el] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }
  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }
}
