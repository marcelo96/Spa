import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'reservacion', component: ReservacionComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
