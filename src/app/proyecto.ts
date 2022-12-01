export interface Proyecto {
  id: number;
  nombre: string;
  imagen: string;
  introduccion: string;
  ingredientes: string[];
  preparacion: string[];
  consejos?: string[];
  fuente: string;
}
