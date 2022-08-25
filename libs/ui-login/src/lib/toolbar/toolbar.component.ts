import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fantasy-football-sleepers-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() title: string;
  @Output() toggleSidenav = new EventEmitter();
}
