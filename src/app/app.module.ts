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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    NosotrosComponent,
    ReservacionComponent,
    ProductosComponent,
    GaleriaComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
