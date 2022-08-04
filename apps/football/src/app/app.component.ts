import { Component } from '@angular/core';

@Component({
  selector: 'fantasy-football-sleepers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'football';
  links = [{ path: '', icon: 'view_list', title: 'Sleepers' }];
}
