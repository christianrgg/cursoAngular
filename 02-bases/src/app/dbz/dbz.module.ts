//PASOS PARA ESTRUCTURA DE MODULO
//1. Crear el modulo con la terminar con el comando ng g m nombreDelModulo
//2. Crear la estructura de carpetas (a)components, (b)interfaces, (c)pages y (d)services
//3. En archivo la carpeta pages crear un archivo llamado "main-page.component.ts" y dentro de este hacer "a-components + TAB".
//4. Cambiar nombre del componente en la clase por MainPageComponent
//5. En el archivo anterior cambiar el nombre del selector por el nombre deseado
//6. Crear el archivo "main-page.component.html" debe ser igual al nombre del paso 3 solo con terminación .html
//7. Ajustar en el archivo main-page.component.ts la ubicacion templateUrl del archivo html
//8. En el mismo archivo en la clase borrar: implements OnInit, constructor, ngOnInit
//9. En el archivo modulo name.module.ts en declaration agregar e importar los componentes.
//10. Agregar exports:[], y de igual forma colocar los modulos.
//11. Ir al archivo app.module.ts y en imports colocar el modulo creado (Verificar que se haya realizado la importación correcta)
//12.


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DbzModule { }
