import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthComponent } from './components/auth/auth.component';
import { MapComponent } from './components/map/map.component';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { EventsComponent } from './components/events/events.component';
import { VolunteerDetailsComponent } from './components/volunteers/volunteer-details/volunteer-details.component';
import { VolunteerCreateFormComponent } from './components/volunteers/volunteer-create-form/volunteer-create-form.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';
import { FormsModule } from '@angular/forms';
import { EventCreateFormComponent } from './components/events/event-create-form/event-create-form.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AuthComponent,
    MapComponent,
    VolunteersComponent,
    EventsComponent,
    VolunteerDetailsComponent,
    VolunteerCreateFormComponent,
    EventCreateFormComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
