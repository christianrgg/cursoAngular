import { OnInit } from '@angular/core';
// 91. Generar el componente Lazy-Image (Es este archivo).
import { Component, Input } from '@angular/core';
// 92. Cambiar el nombre del selector por "shared-lazy-image"
@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
// 97. Agregar validador OnIniti y actualizar la interfaz a lazy...
export class LazyImageComponent implements OnInit {
  // 96. Agregar escuchador de eventos para el padre o decorador input y agregar el non null operator
  @Input()
  public url!:string

  //100. Agregar input para el alt del html del paso 99
  @Input()
  public alt:string = '';

// 105 Crear propiedad publica para saber si ya cargo o no ha cargado la imagen.
  public hasLoaded: boolean = false;

  ngOnInit(): void {
//98. Agregar validaciones
    if(!this.url) throw new Error('Url property is required.');
  }

//106. Crear un metodo para decir si la imagen esta cargada...
  onLoad(){
    console.log('Image Loaded');
    this.hasLoaded = true;
  }
}
