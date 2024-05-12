import { Injectable } from '@angular/core';
import { UserDetails } from '../domain/data/user';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private db: AngularFireDatabase) { }

  createUser(user: UserDetails): Observable<any> {
    const userRef = this.db.list('users').push({});

    return from(userRef.set(user));
  }

  getAllUsers(): Observable<UserDetails[]> {
    return this.db.list<UserDetails>('users').valueChanges();
  }
}
