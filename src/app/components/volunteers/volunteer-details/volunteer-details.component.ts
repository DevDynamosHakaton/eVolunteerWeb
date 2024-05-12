import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserDetails } from 'src/app/domain/data/user';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.scss'],
})
export class VolunteerDetailsComponent {
  
  volunteer!: UserDetails;
  isOpen = false;
UserStatus: any;

  openView(volunteer: UserDetails) {
    this.isOpen = true;
    this.volunteer = volunteer;
  }

  closeView() {
    this.isOpen = false;
  }
}
