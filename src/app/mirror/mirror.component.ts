import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../service/contador.service';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    RouterModule
  ]
})
export class MirrorComponent implements OnInit {

  constructor(public contadorService: ContadorService) {}

  get counter() {
    return this.contadorService.counter;
  }

  incrementar() {
    this.contadorService.incrementar();
  }

  decrementar() {
    this.contadorService.decrementar();
  }

  ngOnInit() {}
}