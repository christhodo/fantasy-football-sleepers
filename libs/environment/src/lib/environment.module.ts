import { ModuleWithProviders, NgModule } from '@angular/core';
import { SleeperEnvironment } from './sleepers.model';
import { SLEEPER_ENVIRONMENT } from './sleepers.token';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: SleeperEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: SLEEPER_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
