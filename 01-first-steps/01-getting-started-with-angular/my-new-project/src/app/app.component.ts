import { Component } from '@angular/core';
import { ButtonFlatComponent } from './button-flat/button-flat.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
@Component({
  selector: 'app-root',
  imports: [
    MyButtonComponent,
    ButtonFlatComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    TwoWayDataBindingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
