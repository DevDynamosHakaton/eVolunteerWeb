import { Injectable } from '@angular/core';
import { UserDetails } from '../domain/data/user';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, finalize, from } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  createUser(user: UserDetails): Observable<any> {
    const userRef = this.db.list('users').push({});

    return from(userRef.set(user));
  }

  getAllUsers(): Observable<UserDetails[]> {
    return this.db.list<UserDetails>('users').valueChanges();
  }

  uploadFile(file: File): Observable<any> {
    const filePath = `images/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    return task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log('File available at', url);
        });
      })
    );
  }
}
