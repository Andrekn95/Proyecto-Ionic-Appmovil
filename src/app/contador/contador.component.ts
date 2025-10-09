import { Component, OnInit,inject } from '@angular/core';
import { IonCard, IonCardContent,IonButton } from "@ionic/angular/standalone";
import { ContadorService } from '../service/contador.service';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonButton,
    RouterModule,
  ]
})
export class ContadorComponent implements OnInit {
 private contadorService = inject(ContadorService);
 counter = this.contadorService.counter$;
constructor() { }
  ngOnInit() {}
}