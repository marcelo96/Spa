import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  onRegisterUser(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(res => {
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

}
