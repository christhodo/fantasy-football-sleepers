import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleeperDetailsComponent } from './sleeper-details.component';

describe('SleeperDetailsComponent', () => {
  let component: SleeperDetailsComponent;
  let fixture: ComponentFixture<SleeperDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SleeperDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SleeperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
