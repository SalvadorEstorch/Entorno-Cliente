import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleVideojuegoComponent } from './componentes/detalle-videojuego/detalle-videojuego.component';
import { ListadoVideojuegosComponent } from './componentes/listado-videojuegos/listado-videojuegos.component';

const routes: Routes = [
  {
    path: '', //cuando definimos el 'path' no puede empezar por '/'
    component: ListadoVideojuegosComponent,
  },
  {
    path: 'videojuego/:id/:titulo/:compania/:valoracion',
    component: DetalleVideojuegoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
