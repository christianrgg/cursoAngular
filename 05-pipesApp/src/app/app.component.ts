// 7. Para configurar animaciones "Ripple" importarlas aqui import { PrimeNGConfig } from 'primeng/api';

import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 8. De la documentacion copiar el constructor e implementar el oninit
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

}
