import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExpensiveComponent } from './blog-expensive.component';

describe('BlogExpensiveComponent', () => {
  let component: BlogExpensiveComponent;
  let fixture: ComponentFixture<BlogExpensiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogExpensiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogExpensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
