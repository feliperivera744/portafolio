import { Injectable } from '@angular/core';
import { Proyecto } from '../proyecto';
import { proyectos } from '../mock-proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  proyecto: Proyecto[] | null = proyectos;

  constructor() { }
  get_proyectos(): Proyecto[] {
    return this.proyecto;
  }

  get_proyecto(id: number): Proyecto | null {
    return this.proyecto.find((r) => r.id === id);
  }
}
