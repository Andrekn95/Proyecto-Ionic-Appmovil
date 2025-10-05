import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  counter = signal(0);

  incrementar() {
    this.counter.update(v => v < 10 ? v + 1 : 10);
  }

  decrementar() {
    this.counter.update(v => v > 0 ? v - 1 : 0);
  }

  set(value: number) {
    this.counter.set(value);
  }
}
