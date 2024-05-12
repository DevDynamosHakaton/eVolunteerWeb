import { Component, Input } from '@angular/core';
import { Event } from 'src/app/domain/data/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {

  @Input() event!: Event;
  isOpen = false;

  openView(event: Event) {
    this.isOpen = true;
    this.event = event;
  }

  closeView() {
    this.isOpen = false;
  }
}
