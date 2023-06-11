// 4. Crear el módulo  shared (si no esta hecha la carpeta la creara) comando: "ng g m shared"
// 8. Exportar el modulo SidebarComponent
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
