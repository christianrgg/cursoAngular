import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
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
@ViewChild('txtTagInput')
 public tagInput!: ElementRef<HTMLInputElement>


// 41. Inyectar el servicio gifsService en el constructor
  constructor(private gifsService: GifsService){}

  searchTag( ){
    const newTag = this.tagInput.nativeElement.value
    console.log({newTag});

// 42. Llamar el servicio inyectado en el paso 41
    this.gifsService.searchTag(newTag);

// 43. Limpiar la input una vez ejecutado el servicio
    this.tagInput.nativeElement.value='';

  }
}
