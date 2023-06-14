// 39. Crear el modulo de countries-rounting(este)
// 40. a- module tab y dejar los impors y los exports
// 41. Agregar nombre a la clase modulo CountriesRoutingModule
// 43. Agregar carpetas components,pages, service, interfaces
// 44. Crear componentes byCapitalPage, byCountryPage,byRegionPage, countryPage "ng g c countries/pages/byRegionPage --inline-style --skip-tests"
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

// 42. Agregar constante para rutas, verificar importacion
// 45. Agregar rutas a paginas de countries
// 46. Para el caso de byCountry se hara de forma dinamica por ello la configuracion.
const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent
  },
  {
    path: 'by/id',
    component: CountryPageComponent
  },
]
//47. Importar el modulo router, agregar que sea para hijos y pasarle la constante con las rutas.
//48. Exportar el modulo.
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }
