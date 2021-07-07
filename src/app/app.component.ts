import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Contador app'; 
  number:number = 10;

  handleClick(isIncrement:boolean){
    return isIncrement ? this.number++ : this.number--;
  }
}
