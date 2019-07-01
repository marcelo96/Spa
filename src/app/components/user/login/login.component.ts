import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private authService: AuthService, private router: Router) { }

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  onLoginFacebook(): void{
    this.authService.loginFacebook().then((res) => {
      console.log(res);
      this.router.navigate(['']);
    }).catch(error => console.error('Error:', error.message));
  }

  onLoginGoogle(){
    this.authService.loginGoogle().then((res) => {
      console.log(res);
      this.router.navigate(['']);
    }).catch(error => console.error('Error:', error.message));
  }

}
