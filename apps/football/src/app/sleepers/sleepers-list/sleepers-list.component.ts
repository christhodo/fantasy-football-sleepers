import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sleeper } from '@fantasy-football-sleepers/api-interfaces';

@Component({
  selector: 'fantasy-football-sleepers-sleepers-list',
  templateUrl: './sleepers-list.component.html',
  styleUrls: ['./sleepers-list.component.scss'],
})
export class SleepersListComponent {
  @Input() sleepers: Sleeper[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
