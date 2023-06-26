// 3. Generar modulo shared
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';


// 21. Exportar el errorpage componente y borrar la importación del commonModule
@NgModule({
  declarations: [
    Error404PageComponent
  ],
  exports:[
    Error404PageComponent
  ]
})
export class SharedModule { }
