import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  tareaInput:string = "" 
  tareas: string[] = []

  OnInput(event: any) {
    this.tareaInput = event.target.value;
  }

  sumarTarea(event:any){
    event.preventDefault()
    if(this.tareaInput !== ""){
      this.tareas.push(this.tareaInput);
    }
  }
}
