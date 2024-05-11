import { Component, Input } from '@angular/core';
import { UserDetails } from 'src/app/domain/data/user';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.scss'],
})
export class VolunteerDetailsComponent {
  @Input() volunteer?: UserDetails;
  @Input() show: boolean = false;
}
