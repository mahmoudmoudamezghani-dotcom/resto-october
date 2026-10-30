import { Component } from '@angular/core';
import { BestExpensiveComponent } from '../best-expensive/best-expensive.component';
import { BlogExpensiveComponent } from '../blog-expensive/blog-expensive.component';
import { OurHistoryComponent } from '../our-history/our-history.component';
import { VideoComponent } from '../video/video.component';
import { PopularMenuComponent } from '../popular-menu/popular-menu.component';
import { TeamMumberComponent } from '../team-mumber/team-mumber.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { RecentViewsComponent } from '../recent-views/recent-views.component';

@Component({
  selector: 'app-home',
  imports: [BestExpensiveComponent,BlogExpensiveComponent,OurHistoryComponent,VideoComponent,PopularMenuComponent,TeamMumberComponent,ReservationComponent,TestimonialsComponent,RecentViewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
