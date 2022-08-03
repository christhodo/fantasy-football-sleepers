import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SleepersComponent } from './sleepers/sleepers.component';
import { SleepersListComponent } from './sleepers/sleepers-list/sleepers-list.component';
import { SleeperDetailsComponent } from './sleepers/sleeper-details/sleeper-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    SleepersComponent,
    SleepersListComponent,
    SleeperDetailsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
