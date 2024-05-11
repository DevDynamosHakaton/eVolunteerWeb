import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(map((user) => !!user));
  }

  async signIn(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/events']);
    });
  }

  async signUp(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async signOut() {
    await this.afAuth.signOut().then(() => {
      this.router.navigate(['/auth']);
    });
  }
}
