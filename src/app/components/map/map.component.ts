import { TmplAstHoverDeferredTrigger } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { Event } from 'src/app/domain/data/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;

  events: Event[] = [];

  constructor(private eventService: EventService) {}

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
  markers: {
    position: any;
    label: any;
    title: any;
    info: any;
    options: any;
  }[] = [];

  ngOnInit() {
    this.eventService.getAll().subscribe({
      next: (data) => {
        data.forEach((event) => {
          this.markers.push({
            position: { lat: event.lat, lng: event.lng },
            label: event.name,
            title: "",
            info: "",
            options: '',
          });
        });
      },
      error: (error) => console.log(error),
    });
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom!) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom!) this.zoom--;
  }

  reset() {
    this.markers = [];
  }

  addMarker(event: any) {
    if (event.latLng) {
      const lat = event.latLng.toJSON().lat;
      const lng = event.latLng.toJSON().lng;

      this.markers.push({
        position: {
          lat: lat,
          lng: lng,
        },
        label: {
          color: 'red',
          text: 'Marker label ' + (this.markers.length + 1),
        },
        title: 'Marker title ' + (this.markers.length + 1),
        info: 'Marker info ' + (this.markers.length + 1),
        options: {
          animation: google.maps.Animation.DROP,
        },
      });
    }
  }
}
