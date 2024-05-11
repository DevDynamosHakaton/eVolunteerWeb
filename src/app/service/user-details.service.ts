import { Injectable } from '@angular/core';
import { UserDetails } from '../domain/data/user';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, catchError, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private db: AngularFireDatabase) { }

  createUser(user: UserDetails): Observable<any> {
    // Generate a new key for the user
    const userRef = this.db.list('users').push({});

    // Create an Observable from the Firebase promise
    return from(userRef.set(user))
    .pipe(
      map(() => ({
        status: 'success',
        message: 'User created successfully!'
      })),
      catchError(error => {
        throw 'Error creating user: ' + error;
      })
    );
  }

  getAllUsers(): Observable<UserDetails[]> {
    return this.db.list<UserDetails>('users').valueChanges();
  }
}
