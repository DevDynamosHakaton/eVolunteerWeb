import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, from } from 'rxjs';
import { Event } from '../domain/data/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private db: AngularFireDatabase) { }

  create(obj: Event): Observable<any> {
    
    const userRef = this.db.list('events').push({});

    return from(userRef.set(obj));
  }

  getAll(): Observable<Event[]> {
    return this.db.list<Event>('events').valueChanges();
  }
}
