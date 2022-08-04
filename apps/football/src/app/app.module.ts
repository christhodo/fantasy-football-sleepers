import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from '@fantasy-football-sleepers/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SleepersComponent } from './sleepers/sleepers.component';
import { SleepersListComponent } from './sleepers/sleepers-list/sleepers-list.component';
import { SleeperDetailsComponent } from './sleepers/sleeper-details/sleeper-details.component';
import { CoreDataModule } from '@fantasy-football-sleepers/core-data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UiLoginModule } from '@fantasy-football-sleepers/ui-login';
import { RoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@fantasy-football-sleepers/environment';

@NgModule({
  declarations: [
    AppComponent,
    SleepersComponent,
    SleepersListComponent,
    SleeperDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiLoginModule,
    RoutingModule,
    EnvironmentModule.withEnvironment(environment),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
