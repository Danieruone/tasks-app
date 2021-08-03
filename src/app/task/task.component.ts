import { Component, ElementRef, ViewChild } from '@angular/core';
import {Task} from "../interfaces/task.interface"
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  taskInput:string = "";
  tasks: Task[] = [];
  @ViewChild("input")input!:ElementRef;

  OnInput(event: any) {
    this.taskInput = event.target.value;
  }

  addTask(event:any){
    event.preventDefault();
    if(this.taskInput !== ""){
      this.tasks.push({
        name: this.taskInput,
        status: false
      });
      this.input.nativeElement.value = ""
    }
  }
}
