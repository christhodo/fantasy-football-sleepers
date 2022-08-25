import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildComponent } from './wild/wild.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@fantasy-football-sleepers/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [WildComponent, LoginComponent, ToolbarComponent],
  exports: [LoginComponent, ToolbarComponent, WildComponent],
})
export class UiLoginModule {}
