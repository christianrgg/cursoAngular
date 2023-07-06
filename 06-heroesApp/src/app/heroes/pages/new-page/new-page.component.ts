import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})

// 98. Implementar el onInit
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id:                new FormControl<string>(''),
    superhero:         new FormControl<string>('', {nonNullable: true}),
    publisher:         new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:         new FormControl(''),
    first_appearance:  new FormControl(''),
    characters:        new FormControl(''),
    alt_img:          new FormControl('')
  });


  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Marvel - Comics'},
  ]

  // 99. Inyectar las propiedades en el constructor activador de rutas y rutas.
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

  // 100. Crear validaciones para si la url dice que esta editando(edit) entonces no haga nada y cree un nuevo heroes y para el caso que si agregue los valores al formulario
  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.heroesService.getHeroById(id)),
    ).subscribe(hero =>{
      if(!hero) {
        return this.router.navigateByUrl('/');
      }
      this.heroForm.reset(hero);
      return;
    })

  }


  get currentHero():Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }


  onSubmit():void{

    if(this.heroForm.invalid) return;

    if(this.currentHero.id){
      this.heroesService.updatedHero(this.currentHero)
      .subscribe(hero => {
        // mostrar snackbar
      });
      return;
    }

    this.heroesService.addHero(this.currentHero)
    .subscribe(hero =>{
      // mostrar snackbar, y navegar a /heroes/edit/hero.id
    })
  }

}
