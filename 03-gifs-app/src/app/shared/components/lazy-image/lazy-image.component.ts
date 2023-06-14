import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!:string

  @Input()
  public alt:string = '';


  public hasLoaded: boolean = false;

  ngOnInit(): void {

    if(!this.url) throw new Error('Url property is required.');
  }

// 112. Agregar tiempo del spinner
  onLoad(){
    setTimeout(()=>{
      this.hasLoaded = true;
    },1000);
  }
}
