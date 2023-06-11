import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  // 28. Agregar al input un id o identificador #txtTagInput
  // 29. LLamar el metodo searchTag al levantar una tecla enter en el input(keyup.enter) requiriendo como parametro el valor del input txtTagInput. Una vez hechos el paso 33 eliminar txtTagInput.value, ya no sera necesario.
  selector: 'gifs-search-box',
  template: `
    <h5>Búscar</h5>
    <input
    type="text"
    class="form-control"
    placeholder="Búscar gifs..."
    #txtTagInput
    (keyup.enter)="searchTag()"
    >
  `,
})

export class SearchBoxComponent {


// 30. Crear una nueva propiedad piblica llamada tagInput(con el Non-null operator) de tipo ElementRef con interface HTMLInputElement
//El view child hace referencia a un elemento y el view children es para todos los elemetos
// 31. La propiedad tagInput debe hacer referencia del input del html y para ello decorarlo con ViewChild {(verificar que se importe de angular core) que llevara como referencia el input txtTagInput
@ViewChild('txtTagInput')
 public tagInput!: ElementRef<HTMLInputElement>


// 27. Crear metodo searchTag que reciba una etiqueta y su tipo
  // searchTag( newTag: string)´
// 32. Quitar la etiqueta y tipo, dado que su etiqueta y tipo viene dado por tagInput que ya tiene una interface
  searchTag( ){
// 33. Crear la constante newTag que haga referencia al identificarod Taginput con decorador, y permita acceder al valor del dom con la propiedad nativeElement
    const newTag = this.tagInput.nativeElement.value
    console.log({newTag});
  }
}
