import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { MapComponent } from './components/map/map.component';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { AuthComponent } from './components/auth/auth.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'events',
    component: EventsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [authGuard],
  },
  {
    path: 'volunteers',
    component: VolunteersComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: '**', redirectTo: 'events' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
