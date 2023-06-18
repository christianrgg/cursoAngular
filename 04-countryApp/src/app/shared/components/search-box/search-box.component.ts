
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})

// 124. Cada que se cambia de pagina se debe destruir el debouncer, para ello implementar ondestroy, en searchbox implementarlo
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer : Subject <string> = new Subject<string>();
// 125. Manejar el ondestroit con una propiedad y colocarla de forma condicional porque an algun momento no hay subcripciones
  private debouncerSuscription?: Subscription



  @Input()
  public placeholder:string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    // 126. llamar a la propiedad debouncer de esta clase.
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(500)
      )
      .subscribe(value =>{
        this.onDebounce.emit(value);
      })
    }

    emitValue(value:string):void{
      this.onValue.emit(value);
    }

    onKeyPress( searchTerm:string){
      this.debouncer.next(searchTerm);
    }
    // 127. Hacer la desuscripcion por medio de la propiedad
      ngOnDestroy(): void {
        this.debouncerSuscription?.unsubscribe();
      }
  }
