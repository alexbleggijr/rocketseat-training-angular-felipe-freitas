import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-flat',
  imports: [],
  template: `
    <button class="btn btn-flat" (click)="limpar()">
      Limpar filtro {{ counter }}
    </button>
  `,
  styles: `
    .btn {
      --primary-orange: #f55a00;
      --white: #fff;

      font-family: Arial, sans-serif;
      padding: 12px 25px;
      font-size: 1em;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      min-width: 150px;
      text-align: center;
      box-sizing: border-box;
    }

    .btn-flat {
      background-color: var(--white);
      border: 2px solid var(--primary-orange);
      color: var(--primary-orange);
    }
  `,
})
export class ButtonFlatComponent implements OnInit, OnDestroy {
  // 1. fazer injeções de dependência
  // 2. criar propriedades
  // 3. criar métodos
  // 4. utilizar ciclos de vida do componente
  // 5. passar valores para o template

  // 1. injeções de dependência
  // inject();
  // constructor() {}

  // 2. propriedades
  counter = 0;
  // private counter = 0;
  // private readonly counter = 0;

  // 3. métodos
  limpar() {
    this.counter += 1;

    console.log('Método limpar');
  }
  /* private limpar() {
    console.log('Método limpar');
  } */

  // 4. utilizar ciclos de vida do componente
  ngOnInit() {}

  // 4. utilizar ciclos de vida do componente
  ngOnDestroy() {}
}
