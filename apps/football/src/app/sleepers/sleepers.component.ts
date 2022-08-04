import { Component, OnInit } from '@angular/core';
import {
  emptySleeper,
  Sleeper,
} from '@fantasy-football-sleepers/api-interfaces';
import { SleepersService } from '@fantasy-football-sleepers/core-data';
import { tap } from 'rxjs';

@Component({
  selector: 'fantasy-football-sleepers',
  templateUrl: './sleepers.component.html',
  styleUrls: ['./sleepers.component.scss'],
})
export class SleepersComponent implements OnInit {
  sleepers = [];
  sleepers$: any;
  selectedSleeper = emptySleeper;
  originalName = '';

  constructor(private sleepersService: SleepersService) {}

  ngOnInit(): void {
    this.fetchSleepers();
  }

  selectSleeper(sleeper: Sleeper) {
    this.selectedSleeper = sleeper;
  }

  fetchSleepers() {
    this.sleepers$ = this.sleepersService.all();
  }

  saveSleeper(sleeper: Sleeper) {
    if (sleeper.id) {
      this.updateSleeper(sleeper);
    } else {
      this.createSleeper(sleeper);
    }
  }

  createSleeper(sleeper: Sleeper) {
    this.sleepersService
      .create(sleeper)
      .subscribe((result) => this.fetchSleepers());
  }

  updateSleeper(sleeper: Sleeper) {
    this.sleepersService
      .update(sleeper)
      .subscribe((result) => this.fetchSleepers());
  }

  deleteSleeper(id: number) {
    this.sleepersService
      .delete(id)
      .pipe(tap(() => this.fetchSleepers()))
      .subscribe();
  }

  reset() {
    this.selectSleeper({ ...emptySleeper });
  }
}
