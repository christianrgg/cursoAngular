import { Component } from '@angular/core';


@Component({
  selector: `app-counter`,
  template: `
    <h3>Counter {{counter}}</h3>
    <!-- Se llama al metodo increaseByOne -->
    <button (click)="decrementByOne(-1)">-</button>
    <button (click)="resetCounter(0)">Reset</button>
    <button (click)="increaseByOne(1)">+</button>
  `,
})      //Decorador
export class CounterComponent {
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
