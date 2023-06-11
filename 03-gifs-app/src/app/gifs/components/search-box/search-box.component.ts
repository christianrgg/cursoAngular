// 17. Generar un componente de barra de busqueda para la pagina home-page "ng g component gifs/components/search-box"
//18. Cambiar el nombre del selector por "gifs-search-box"
//19. Por ser muy pequeño no tendra CSS ni html, sino template con backtics
import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Búscar</h5>
    <input
    type="text"
    class="form-control"
    placeholder="Búscar gifs..."
    >
  `,
})
export class SearchBoxComponent {

}
