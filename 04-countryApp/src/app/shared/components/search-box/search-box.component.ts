// 58. Crear componente searchComponent como sera compartido va aqui. "ng g c shared/components/searchBox --inline-style --skip-tests", cambiar el nombre del selector
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
// 59. Crear el escuchador de eventos para el placeholder
@Input()
  public placeholder:string = '';
}
