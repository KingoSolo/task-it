import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})

export class Header {
  appName : string = 'Task It';
  currentDate : Date = new Date();
}
