import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User, auth } from 'firebase';
import { AppUser } from '../models/app-user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData;

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        // Save user data in localstorage when logged in
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        // Set user data to null when logged out
        localStorage.setItem('user', null);
      }
    });
  }

  signIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
      this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    });
  }

  signUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((result) => {
      // Send verification email when new user signs up and returns promise
      this.sendVerificationMail();
      this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  sendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification().then(() => {
      this.router.navigate(['auth/verify-email']);
    });
  }

  forgotPassword(passwordResetEmail: string) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail).then(() => {
      window.alert('Password reset email sent, check your inbox');
    }).catch((error) => {
      window.alert(error)
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false);
  }

  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  authLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
      this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error);
    });
  }

  setUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: AppUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {merge: true});
  }

  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth/sign-in']);
    });
  }
}
