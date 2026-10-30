import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBlogComponent } from './elements-blog.component';

describe('ElementsBlogComponent', () => {
  let component: ElementsBlogComponent;
  let fixture: ComponentFixture<ElementsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
