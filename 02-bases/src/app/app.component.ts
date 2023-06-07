import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10;

  //Logica de botones
  increaseByOne(value:number): void {
    this.counter += value;
  }
  decrementByOne(value:number): void {
    this.counter -=value;
  }
  resetCounter(value:number):void{
     this.counter = 0;
  }
}
