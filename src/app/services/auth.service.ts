import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  // loginEmailPassword(email: string, password: string){
  //   return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  // }

  loginFacebook(){
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  isAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  singOut(){
    return this.afAuth.auth.signOut();
  }
}
