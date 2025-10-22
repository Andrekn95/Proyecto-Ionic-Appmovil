import { Component, inject, OnInit } from '@angular/core';
import { ContadorService } from '../service/contador.service';
import { IonButton, IonCard, IonCardContent } from "@ionic/angular/standalone"; 
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss'],
  imports: [IonCardContent, IonCard, IonButton, RouterModule],
  standalone: true
})
export class BotonComponent implements OnInit {
 private contadorService = inject(ContadorService);
 counter = this.contadorService.counter$;

constructor() { }
  ngOnInit() {}
incrementar(){
    this.contadorService.incrementar();
  }

  decrementar(){
    this.contadorService.decrementar();
  }
}