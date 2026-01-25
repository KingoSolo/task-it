import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { TaskList } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, TaskList],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('task-it');
}
