import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss',
})
export class PropertyBindingComponent {
  texto = 'Texto do input';
  inputType = 'text';
  inputDisabled = true;

  habilitarInput() {
    this.inputDisabled = false;
  }

  desabilitarInput() {
    this.inputDisabled = true;
  }

  onInputChange(event: Event) {
    this.texto = (event.target as HTMLInputElement).value;
  }

  logarTexto() {
    console.log(this.texto);
  }
}
