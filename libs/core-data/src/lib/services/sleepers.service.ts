import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { NotificationsService } from './notifications.service';
import {
  SleeperEnvironment,
  SLEEPER_ENVIRONMENT,
} from '@fantasy-football-sleepers/environment';
import { Sleeper } from '@fantasy-football-sleepers/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class SleepersService {
  model = 'sleepers';

  constructor(
    private httpClient: HttpClient,
    @Inject(SLEEPER_ENVIRONMENT) private environment: SleeperEnvironment,
    private notificationsService: NotificationsService
  ) {}

  all() {
    return this.httpClient.get<Sleeper[]>(this.getUrl());
  }

  find(sleeperId: string) {
    return this.httpClient.get<Sleeper>(this.getUrlById(sleeperId));
  }

  create(sleepers: Sleeper) {
    this.notificationsService.notify('Created Sleeper HTTP Call');
    return this.httpClient.post<Sleeper>(this.getUrl(), sleepers);
  }

  update(sleepers: Sleeper) {
    this.notificationsService.notify('Updated Sleeper HTTP Call');
    return this.httpClient.patch<Sleeper>(
      this.getUrlById(sleepers.id),
      sleepers
    );
  }

  delete(id: number) {
    this.notificationsService.notify('Deleted Sleeper HTTP Call');
    return this.httpClient.delete(this.getUrlById(id));
  }

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
