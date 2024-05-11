import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { flatMap } from 'rxjs';
import { UserDetails } from 'src/app/domain/data/user';

@Component({
  selector: 'app-volunteer-create-form',
  templateUrl: './volunteer-create-form.component.html',
  styleUrls: ['./volunteer-create-form.component.scss']
})
export class VolunteerCreateFormComponent {

  @Output() createEvent: EventEmitter<UserDetails> = new EventEmitter();
  isOpen = false;

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  submit() {
    
    // this.createEvent.emit()
  }
}
