import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Task } from '../../interface/task.interface';

@Component({
  selector: 'app-task-container',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  taskInput: string = '';
  tasks: Task[] = [];
  @ViewChild('input') input!: ElementRef;

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.restService.getTasks().subscribe((data: any) => {
      this.tasks = data.tasks;
    });
  }

  OnInput(event: any) {
    this.taskInput = event.target.value;
  }

  addTask(event: any) {
    event.preventDefault();
    if (this.taskInput !== '') {
      this.postTask();
      this.taskInput = '';
      this.input.nativeElement.value = '';
    }
  }

  postTask() {
    const payload = {
      user_id: this.restService.userID,
      name: this.taskInput,
    };
    this.restService.postTask(payload).subscribe((data: any) => {
      console.log(data);
      this.tasks.push({
        _id: data.task._id,
        name: data.task.name,
        status: data.task.status,
      });
    });
  }

  deleteTask(index: number) {
    this.tasks = this.tasks.filter((tarea, idx) => idx !== index);
  }
}
