import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepersComponent } from './sleepers.component';

describe('SleepersComponent', () => {
  let component: SleepersComponent;
  let fixture: ComponentFixture<SleepersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SleepersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SleepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
