import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-flat',
  imports: [],
  template: `
    <button class="btn btn-flat" (click)="limpar()">
      Limpar filtro {{ counter }} {{ myCounter() }}
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
  counter = 0;

  myCounter() {
    this.counter += 1;
    return this.counter;
  }

  limpar() {
    this.counter += 1;

    console.log('Método limpar');
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
