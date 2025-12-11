import { Component } from '@angular/core';
import { MyButtonComponent } from './my-button/my-button.component';
@Component({
  selector: 'app-root',
  imports: [MyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
