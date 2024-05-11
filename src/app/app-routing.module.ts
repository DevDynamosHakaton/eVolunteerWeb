import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { MapComponent } from './components/map/map.component';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { SingInComponent } from './components/auth/sing-in/sing-in.component';
import { SingUpComponent } from './components/auth/sing-up/sing-up.component';

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'map', component: MapComponent},
  {path: 'volunteers', component: VolunteersComponent},
  {
    path: 'auth',
    children: [
      {path: "sign-in", component: SingInComponent},
      {path: "sign-up", component: SingUpComponent},
      {path: "", redirectTo: "sign-in", pathMatch: "full"},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
