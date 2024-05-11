import { Component, Input } from '@angular/core';
import { UserDetails } from 'src/app/domain/data/user';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss'],
})
export class VolunteersComponent {

  @Input() volunteers: UserDetails[] = [];

  showDetails = false;
  showCreate = false;
  selectedVolunteer?: UserDetails;



  onCloseDetails() {
    this.showDetails = false;
  }

  onOpenDetails(volunteer: UserDetails) {
    this.showDetails = true;
    this.selectedVolunteer = volunteer;
  }

  onOpenCreate() {
    this.showCreate = true;
  }

  onCloseCreate() {
    this.showCreate = false;
  }

  onCreateVolunteer(volunteer: UserDetails) {
    this.volunteers.unshift(volunteer);
  }
}
