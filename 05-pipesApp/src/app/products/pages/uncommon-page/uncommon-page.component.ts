import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18nSelectPipe
  public name: string = 'Christian';
  public gender: 'male' | 'female'  = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name= 'Arely';
    this.gender = 'female';
  }

  //i18Plural
  public clients: string[] = ['Copito', 'Burguer', 'Kenini', 'Chikis', 'Kiwi', 'Coffe', 'Minerva'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift();
  }

  //keyValue Pipe
  public person = {
    name: 'Christian',
    age: '30',
    address: 'Merida'
  }

  //Async Pipe
  public myObservableTime = interval(2000).pipe(
    tap(value => console.log('tap:', value))
    );

  public promiseValue: Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
    },3500)
  })
}
