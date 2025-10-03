import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('test');
}
