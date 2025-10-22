import { Injectable, signal,  } from '@angular/core';
import { WritableSignal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  counter$: WritableSignal<number>= signal(0);

  incrementar() {
    this.counter$.update(i =>   i + 1  );
  }

  decrementar() {
    this.counter$.update(i => i - 1 > 0 ? i -1:0 );
  }
}