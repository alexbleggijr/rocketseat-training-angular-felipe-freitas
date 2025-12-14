import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss',
})
export class EventBindingComponent {
  onButtonClick() {
    console.log('onButtonClick');
  }

  onInput(event: Event) {
    const target = (event.target as HTMLInputElement).value;
    console.log('onInput', target);
  }

  onBlur() {
    console.log('onBlur');
  }

  onFocus() {
    console.log('onFocus');
  }
}
