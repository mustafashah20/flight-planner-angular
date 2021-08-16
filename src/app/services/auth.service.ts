import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  $user: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth, private angularFirestore: AngularFirestore, private router: Router) {
    this.$user = this.angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.angularFirestore.doc<any>(`users/${user.uid}`).valueChanges();
        }
        else {
          return of(null);
        }
      })
    )
  }

  signUp(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.createUserData(result.user);
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  signIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.getUserData(result.user)
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  signOut() {
    this.angularFireAuth.signOut()
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  private createUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`users/${user.uid}`);

    const data = {
      role: 'traveler',
    };

    userRef.set(data, { merge: true });
    this.router.navigate(['traveler-home']);
  }

  private getUserData(user) {
    this.angularFirestore.doc(`users/${user.uid}`).valueChanges().subscribe((data: any) => {
      if (data.role === "admin") {
        this.router.navigate(['admin-home'])
      }
      else if (data.role === "traveler") {
        this.router.navigate(['traveler-home'])
      }
    })
  }

}
