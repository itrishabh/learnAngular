import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockAnimationComponent } from './clock-animation.component';

describe('ClockAnimationComponent', () => {
  let component: ClockAnimationComponent;
  let fixture: ComponentFixture<ClockAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClockAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
