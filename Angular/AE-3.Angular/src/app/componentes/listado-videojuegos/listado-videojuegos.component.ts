import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';
import { Router } from '@angular/router';

@Component({
  selector: 'listado-videojuegos',
  templateUrl: './listado-videojuegos.component.html',
  styleUrls: ['./listado-videojuegos.component.css'],
})
export class ListadoVideojuegosComponent implements OnInit {
  listaVideojuegos: Videojuego[] = [];
  id: number = 0;
  titulo: string = '';
  compania: string = '';
  valoracion: number = 0;

  constructor(private router: Router) {
    let videojuego: Videojuego;
    videojuego = new Videojuego(8, 'Final fantasi', 'compañía', 4.5);
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego(8, 'Final fantasi', 'compañía', 4.5);
    this.listaVideojuegos.push(videojuego);
  }

  public buscarVideojuego(id: number): Videojuego {
    let videojuego = new Videojuego(0, 'prueba', 'prueba', 0);
    for (let i = 0; i < this.listaVideojuegos.length; i++) {
      if (this.listaVideojuegos[i].id == id) {
        videojuego = this.listaVideojuegos[i];
        break;
      }
    }
    return videojuego;
  }

  public routingProgramatico(id: number) {
    let vj: Videojuego;
    vj = this.buscarVideojuego(id);
    this.id = vj.id;
    this.titulo = vj.titulo;
    this.compania = vj.compania;
    this.valoracion = vj.valoracion;
    this.router.navigate([
      '/videojuego',
      this.id,
      this.titulo,
      this.compania,
      this.valoracion,
    ]);
  }
  ngOnInit(): void {}
}
