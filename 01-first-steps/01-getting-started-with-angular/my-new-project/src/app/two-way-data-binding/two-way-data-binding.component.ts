import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.scss',
})
export class TwoWayDataBindingComponent {
  text = 'initial text';

  logarTexto() {
    console.log(this.text);
  }
}
