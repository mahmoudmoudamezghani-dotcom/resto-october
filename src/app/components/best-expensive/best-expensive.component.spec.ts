import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestExpensiveComponent } from './best-expensive.component';

describe('BestExpensiveComponent', () => {
  let component: BestExpensiveComponent;
  let fixture: ComponentFixture<BestExpensiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestExpensiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestExpensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
