
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})

// 117. Implementar el onInit
export class SearchBoxComponent implements OnInit {
  // 116. Crear nueva propiedad privada con un observable subject
  private debouncer : Subject <string> = new Subject<string>();


  @Input()
  public placeholder:string = '';


  @Output()
  public onValue = new EventEmitter<string>();

// 121. Agregar un emisor de eventos
  @Output()
  public onDebounce = new EventEmitter<string>();

// 118. Establecer una suscripción al debouncer y muestrar (*en consola) los valores emitidos por él
// 120. Agregarle debounce time con el pipe
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe(value =>{
      // console.log('debouncer value', value);
      // 122. Llamar al ondebounce y el valor que emite
      this.onDebounce.emit(value);
    })
  }


  emitValue(value:string):void{
    this.onValue.emit(value);
  }



// 115. Crear nuevo metodo llamado
  onKeyPress( searchTerm:string){
    // console.log(searchTerm);
// 119. Llamar al debouncer
    this.debouncer.next(searchTerm);

  }
}
