import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Task } from '../../interface/task.interface';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Input() index!: number;
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();

  constructor(private restService: RestService) {}

  changeStatus() {
    this.task.status = !this.task.status;
    const payload = {
      status: this.task.status,
    };
    this.restService.editTask(payload, this.task._id).subscribe((data) => {
      console.log(data);
    });
  }

  deleteTask() {
    this.restService
      .deleteTask(this.task._id)
      .subscribe((data) => console.log(data));
    this.onDeleteTask.emit(this.index);
  }
}
