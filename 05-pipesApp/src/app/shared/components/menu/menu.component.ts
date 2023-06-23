// 12. Generar este componente ng g c shared/components/menu y cambiar nombre de selector
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


// 16. Crear la clase de acuerdo a la documentación
@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
   public menuItems: MenuItem[] =[];

  ngOnInit() {
    this.menuItems =[
      {label: 'New', icon: 'pi pi-fw pi-plus'},
      {label: 'Open', icon: 'pi pi-fw pi-download'},
      {label: 'Undo', icon: 'pi pi-fw pi-refresh'},
    ];

  }
}
