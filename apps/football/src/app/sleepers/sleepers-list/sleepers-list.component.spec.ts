import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepersListComponent } from './sleepers-list.component';

describe('SleepersListComponent', () => {
  let component: SleepersListComponent;
  let fixture: ComponentFixture<SleepersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SleepersListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SleepersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
