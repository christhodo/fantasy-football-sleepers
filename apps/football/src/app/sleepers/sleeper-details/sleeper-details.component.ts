import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Sleeper } from '@fantasy-football-sleepers/api-interfaces';

@Component({
  selector: 'fantasy-football-sleepers-sleeper-details',
  templateUrl: './sleeper-details.component.html',
  styleUrls: ['./sleeper-details.component.scss'],
})
export class SleeperDetailsComponent {
  currentSleeper: Sleeper;
  originalName = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set sleeper(value) {
    if (!value) return;
    this.currentSleeper = { ...value };
    this.originalName = this.currentSleeper.name;
  }
}
