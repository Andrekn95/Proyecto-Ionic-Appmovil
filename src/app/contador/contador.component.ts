import { Component, signal, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonItem, IonInput, IonButton, IonCardHeader, IonCardTitle, IonList, IonLabel } from "@ionic/angular/standalone";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
  standalone: true,
  imports: [IonCardTitle, IonLabel, IonList, IonCardHeader, IonCard, IonCardContent, IonItem, IonInput, IonButton, FormsModule]
})
export class ContadorComponent implements OnInit {
  counter = signal(0);

  constructor() { }

  incrementar() {
    this.counter.update((value: number) => {
      if (value < 10) {
        return value + 1;
      }
      return 10;
    });
  }

  decrementar() {
    this.counter.update((value: number) => {
      return value > 0 ? value - 1 : 0;
    });
  }

  ngOnInit() {}
}
