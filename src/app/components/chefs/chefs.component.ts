import { Component } from '@angular/core';
import { TeamMumberComponent } from '../team-mumber/team-mumber.component';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-chefs',
  imports: [TeamMumberComponent,VideoComponent],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css'
})
export class ChefsComponent {

}
