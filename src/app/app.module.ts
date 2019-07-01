import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';

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
    BarraMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
