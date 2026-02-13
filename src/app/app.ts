import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DirectivesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('directives');
}
