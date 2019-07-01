import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  onLoginEmailPassword(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(res => {
      this.router.navigate(['nosotros']);
    }).catch(error => console.error('Error', error.message));
  }

  onLoginGoogle(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res => {
      this.router.navigate(['nosotros']);
    }).catch(error => console.error('Error', error.message));
  }

  onLoginFacebook(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(res => {
      this.router.navigate(['nosotros']);
    }).catch(error => console.error('Error', error.message))
  }

  onLogout(){
    this.afAuth.auth.signOut();
  }

}
