import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthComponent } from './components/auth/auth.component';
import { SingInComponent } from './components/auth/sing-in/sing-in.component';
import { SingUpComponent } from './components/auth/sing-up/sing-up.component';
import { MapComponent } from './components/map/map.component';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { EventsComponent } from './components/events/events.component';
import { VolunteerDetailsComponent } from './components/volunteers/volunteer-details/volunteer-details.component';
import { VolunteerCreateFormComponent } from './components/volunteers/volunteer-create-form/volunteer-create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AuthComponent,
    SingInComponent,
    SingUpComponent,
    MapComponent,
    VolunteersComponent,
    EventsComponent,
    VolunteerDetailsComponent,
    VolunteerCreateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
