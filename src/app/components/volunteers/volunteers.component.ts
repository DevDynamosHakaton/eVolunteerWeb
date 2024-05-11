import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/domain/data/user';
import { UserDetailsService } from 'src/app/service/user-details.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss'],
})
export class VolunteersComponent implements OnInit {
  @Input() volunteers: UserDetails[] = [];

  selectedVolunteer?: UserDetails;

  constructor(private userDetailsService: UserDetailsService) {}

  ngOnInit() {
    this.userDetailsService.getAllUsers().subscribe({
      next: (users) => (this.volunteers = users),
      error: (error) => console.log(error),
    });
  }

  onCreateVolunteer(volunteer: UserDetails) {
    this.userDetailsService.createUser(volunteer).subscribe({
      next: (data) => {
        this.volunteers.unshift(volunteer);
      },
      error: (error) => console.log(error),
    });
  }
}
