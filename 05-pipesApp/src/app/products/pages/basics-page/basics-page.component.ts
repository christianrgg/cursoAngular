// 2. Generar 3 componentes de esta carpeta.
import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'mérida'
  public nameUpper: string = 'MÉRIDA'
  public fullName: string = 'MÉriDa'

  public customDate: Date = new Date();
}
