import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth} from '@angular/fire/auth';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { BarraMenuComponent } from './components/barra-menu/barra-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    NosotrosComponent,
    ReservacionComponent,
    ProductosComponent,
    GaleriaComponent,
    ServiciosComponent,
    LoginComponent,
    RegisterComponent,
    BarraMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
