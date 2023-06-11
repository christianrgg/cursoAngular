
import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

// 44. Insertar el servicio en la barra lateral como privado
  constructor(private gifsService: GifsService){}

// 45. Como el servicio es privado, requerira un getter que permita dar acceso en el archivo html del historial de tagHistory
  get tags() {
    return this.gifsService.tagHistory
  }

}
