import { Component, Input } from '@angular/core';
import { Event } from 'src/app/domain/data/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {

  event!: Event;
  isOpen = false;

  openView(event: Event) {
    this.isOpen = true;
    this.event = event;

    this.marker = {
      position: {
        lat: this.event.lat,
        lng: this.event.lng
      }
    }

    this.center = {
      lat: this.event.lat,
      lng: this.event.lng,
    };

  }

  closeView() {
    this.isOpen = false;
  }

  zoom = 12;
  center: google.maps.LatLngLiteral = {
    lat: 49.842957,
    lng: 24.031111,
  };
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  };

  marker?: any

  zoomIn() {
    if (this.zoom < this.options.maxZoom!) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom!) this.zoom--;
  }
}
