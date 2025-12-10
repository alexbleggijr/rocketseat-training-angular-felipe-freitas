import { Component } from '@angular/core';
import { ButtonFlatComponent } from './button-flat/button-flat.component';
import { MyButtonComponent } from './my-button/my-button.component';
@Component({
  selector: 'app-root',
  imports: [MyButtonComponent, ButtonFlatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
