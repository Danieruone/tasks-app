import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Task} from "../../interface/task.interface"

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})

export class TaskCardComponent {
  @Input() task!:Task 
  @Input() index!:number 
  @Output() onDeleteTask:EventEmitter<number> = new EventEmitter();

  changeStatus(){
    this.task.status = !this.task.status
  }

  deleteTask(){
    this.onDeleteTask.emit(this.index)
  }
}
