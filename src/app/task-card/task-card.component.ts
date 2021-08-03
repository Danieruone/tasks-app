import { Component, Input } from '@angular/core';
import {Task} from "../interfaces/task.interface"

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() task!:Task 
  @Input() tasks!:Task[]
  @Input() index!:number 

  changeStatus(){
    this.task.status = !this.task.status
  }

  deleteTask(){
    this.tasks = this.tasks.filter((tarea, index) =>  index !== this.index );
    console.log(this.tasks)
  }
}
