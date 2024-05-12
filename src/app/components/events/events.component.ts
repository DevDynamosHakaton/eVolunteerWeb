import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/domain/data/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getAll().subscribe({
      next: (events) => (this.events = events),
      error: (error) => console.log(error),
    });
  }

  onCreateEvent(event: Event) {
    this.eventService.create(event).subscribe({
      next: (data) => {
        this.events.unshift(data);
      },
      error: (error) => console.log(error),
    });
  }
}
