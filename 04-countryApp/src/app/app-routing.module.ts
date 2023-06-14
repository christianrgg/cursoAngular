import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContacPageComponent } from './shared/pages/contac-page/contac-page.component';
// 37. Crear las ruta de la nueva pagina ContacPageComponent
 const routes: Routes =[
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contac',
    component: ContacPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
 ];


@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
