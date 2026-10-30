import { Component } from '@angular/core';
import { OurHistoryComponent } from '../our-history/our-history.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-about',
  imports: [OurHistoryComponent,TestimonialsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
