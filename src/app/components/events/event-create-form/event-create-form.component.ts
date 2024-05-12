import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';
import { Event, EventStatus, EventType } from 'src/app/domain/data/event';
import { UserDetails } from 'src/app/domain/data/user';
import { EventService } from 'src/app/service/event.service';
import { UserDetailsService } from 'src/app/service/user-details.service';

@Component({
  selector: 'app-event-create-form',
  templateUrl: './event-create-form.component.html',
  styleUrls: ['./event-create-form.component.scss'],
})
export class EventCreateFormComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;

  @Output() createEvent: EventEmitter<Event> = new EventEmitter();
  isOpen = false;

  volunteers: UserDetails[] = [];

  newObject: Event = {
    id: '',
    name: '',
    description: '',
    address: '',
    type: EventType.EXPLOSION,
    status: EventStatus.NOT_STARTED,
    createdAt: new Date().toDateString(),
    volunteers: [''],
    volunteersAskAmount: 0,
    lat: 0,
    lng: 0,
  };

  optionType = [
    { label: 'Вибух', value: EventType.EXPLOSION },
    { label: 'Пожежа', value: EventType.FIRE },
    { label: 'Обвал', value: EventType.RUINE },
    { label: 'Пошуки людини', value: EventType.SEARCH },
    { label: 'ДТП', value: EventType.TRANSPORT },
  ];

  optionStatus = [
    { label: 'Завершено', value: EventStatus.COMPLETED },
    { label: 'В процесі', value: EventStatus.IN_PROGRESS },
    { label: 'Не почалось', value: EventStatus.NOT_STARTED },
  ];

  constructor(
    private eventService: EventService,
    private userDetailsService: UserDetailsService
  ) {}

  ngOnInit() {
    this.userDetailsService.getAllUsers().subscribe({
      next: (data) => (this.volunteers = data),
      error: (error) => console.log(error),
    });
  }

  openView() {
    this.isOpen = true;
  }

  closeView() {
    this.isOpen = false;
  }

  reset() {
    this.newObject = {
      id: '',
      name: '',
      description: '',
      address: '',
      type: EventType.EXPLOSION,
      status: EventStatus.NOT_STARTED,
      createdAt: new Date().toDateString(),
      volunteers: [''],
      volunteersAskAmount: 0,
      lat: 0,
      lng: 0,
    };
  }

  submit() {
    this.eventService.create(this.newObject).subscribe({
      next: (data) => {
        this.closeView();
        this.createEvent.emit(data);
        this.reset();
      },
      error: (error) => console.log(error),
    });
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
  marker?: {
    position: any;
  };

  zoomIn() {
    if (this.zoom < this.options.maxZoom!) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom!) this.zoom--;
  }

  resetMarker() {
    this.marker = undefined;
    this.newObject.lat = 0;
    this.newObject.lng = 0;
  }

  addMarker(event: any) {
    if (event.latLng) {
      const lat = event.latLng.toJSON().lat;
      const lng = event.latLng.toJSON().lng;

      this.newObject.lat = lat;
      this.newObject.lng = lng;
      this.marker = {
        position: {
          lat: lat,
          lng: lng,
        },
      };
    }
  }
}
