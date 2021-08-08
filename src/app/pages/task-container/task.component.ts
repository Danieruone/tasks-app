import { Component, ElementRef, ViewChild } from '@angular/core';
import { Task } from '../../interface/task.interface';

@Component({
  selector: 'app-task-container',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  taskInput: string = '';
  tasks: Task[] = [];
  @ViewChild('input') input!: ElementRef;

  OnInput(event: any) {
    this.taskInput = event.target.value;
  }

  addTask(event: any) {
    event.preventDefault();
    if (this.taskInput !== '') {
      this.tasks.push({
        name: this.taskInput,
        status: false,
      });
      this.taskInput = '';
      this.input.nativeElement.value = '';
    }
  }

  deleteTask(index: number) {
    this.tasks = this.tasks.filter((tarea, idx) => idx !== index);
  }
}
