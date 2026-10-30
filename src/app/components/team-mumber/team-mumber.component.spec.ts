import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMumberComponent } from './team-mumber.component';

describe('TeamMumberComponent', () => {
  let component: TeamMumberComponent;
  let fixture: ComponentFixture<TeamMumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
