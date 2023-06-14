// 6. Generar modulo shared (este).
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';



//9. Exportar el modulo HomePageComponent
//14. Exportar AboutPageComponent
@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent
  ]
})
export class SharedModule { }
