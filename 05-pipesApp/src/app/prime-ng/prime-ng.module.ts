// 10. Generar el modulo de prime  ng g m primeNg y borrar lo necesario
import { NgModule } from '@angular/core';
// 11. Importar los modulos que se usaran de primeng y exportarlos
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';





@NgModule({
  exports: [
    MenuModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
