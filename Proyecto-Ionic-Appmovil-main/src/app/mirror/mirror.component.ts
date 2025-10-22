import { Component, OnInit, inject } from '@angular/core';
import { IonCard, IonCardContent, IonButton } from "@ionic/angular/standalone";
import { ContadorService } from '../service/contador.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonButton,
    RouterModule,
  ]
})
export class MirrorComponent implements OnInit {
 private contadorService = inject(ContadorService);
 counter = this.contadorService.counter$;
constructor() { }
  ngOnInit() {}
}