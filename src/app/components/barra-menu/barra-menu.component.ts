import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {

  constructor(private authService: AuthService, private afAuth: AngularFireAuth, private router: Router) { }
  public logueado: boolean = false;

  ngOnInit() {
  }

  onLogged(){
    console.log('Estado de usuario inicial: ',this.logueado);
    this.onIsLogin().subscribe(auth => {
      if(auth){
        this.logueado = true;
        console.log('Estado de usuario actual: ',this.logueado);
      }else{
        this.logueado = false;
        console.log('Estado de usuario actual: ',this.logueado);
      }
    });
  }

  onSignOut(){
    this.afAuth.auth.signOut().then(res => {
      this.router.navigate(['login']);
    }).catch(error => console.error('Error', error.message));
  }

  onIsLogin(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

}