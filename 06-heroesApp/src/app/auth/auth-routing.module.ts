// 6. crear el routing manualmente a- module, depurar lo necesario
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 7. Crear la constante Routes e importar la interface
const routes: Routes = [];
// 8. Importar el routermodule y agregar forchild
// 9. Exportar el routermodule
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
