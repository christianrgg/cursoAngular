// 16. Crear el modulo para las rutas (este) borrar lo necesario.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

// 18. Crear constante para routes y verificar importacion de routes y colocar definicion de rutas y componentes
// 19. Hacer la redireccion para pagina de inicio con el comodin **
 const routes: Routes =[
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
 ];

//20. Importar el routermodulo. Como es el ruter principal colocar lo siguiente: forRoot(routes). Si es el segundo archivo cambiaran por forchild.
// 21. Exportar RouterModule
@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
// 17. Cambiar nombre de modulo
export class AppRoutingModule { }
