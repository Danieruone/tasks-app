import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnDestroy {
  constructor(){
    alert("tarjeta creada, este es el constructor")
  }

  @Input() nombre:string = "Default"
  @Input() tareas:string[] = []

  eliminarTarea(){
    this.tareas.splice(0, 1);
  }
  
  ngOnDestroy(){
    alert("tarjeta destruida, este es el ondestroy")
  }
}
