// PASOS PARA CREAR UN MODULO
// 1. Cree el archivo "nombre.module.ts"
// 2. Escribir en el archivo creado "a-modu + TAB"
// 3. Borrar o cambiar lo necesario (Para este ejemplo borrar importación de componente, importaciones y providers)
//4. Cambiar el nombre de exportacion al modulo "NombreModulo"
//5. En las declaraciones agregar los componentes del modulo
//6. Tambien agregarlos en las exportaciones
//7. Abrir el archivo app.module.ts y en importaciones agregar el nuevo modulo creado
//8. Eliminar en declaraciones las duplicaciones de componentes.
//8.Agregar en el modulo creado, las importaciones de CommonModulo,

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule { }
