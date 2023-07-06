import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})


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

  //107. Inyectar el servicio matdialog
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
    ){}

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
        this.showSnackBar(`${hero.superhero} updated!`)
      });
      return;
    }

    this.heroesService.addHero(this.currentHero)
    .subscribe(hero =>{
      this.router.navigate(['/heroes/edit',hero.id])
      this.showSnackBar(`${hero.superhero} created!`)
    })
  }

  // 108. Crear metodo para confirmar borrado de heroe, ya tiene todo del formulario
  onDeleteHero(){
    if(!this.currentHero.id) throw Error('Hero id is required');

    // 109. Copiar el codigo de angular material
    // 110. Crear el componente confirmDialog y agregarlo
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: this.heroForm.value
      });

    dialogRef.afterClosed().subscribe(result => {
      // 114. Si es falso
      if(!result) return;
      // 115. si es verdadero
      this.heroesService.deletedHeroById(this.currentHero.id);
      //116. Sacar a la ruta listado
      this.router.navigate(['/heroes'])
    });
  }

  showSnackBar(message: string):void{
    this.snackbar.open(message, 'done'),{
      duration: 2500,
    }
  }

}
