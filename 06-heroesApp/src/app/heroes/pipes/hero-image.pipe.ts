// 59. Generar pipe para link de imagen con ng g @schematics/angular:pipe heroes/pipes/heroImage --flat --skip-tests
import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})

export class HeroImagePipe implements PipeTransform {

// 60. Agregar que tipo de información recibirá el pipe
  transform(hero: Hero): string {
    // 61. Agregar condicional para caso de no existir imagen
    if(!hero.id && !hero.alt_img){
      return 'assets/no-image'
    }

    // 62. Agregar condicional para caso donde si este la imagen
    if (hero.alt_img) return hero.alt_img;
    return `assets/heroes/${hero.id}.jpg`

  }

}
