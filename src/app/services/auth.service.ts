import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  loginFacebook(){
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
