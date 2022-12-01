export class Videojuego {
  //Es un atributo privado
  private _id: number = 0;

  //El constructor que recibe por parametros de entrada los valores y crea el videojuego
  constructor(
    _id: number,
    public titulo: string,
    public compania: string,
    public valoracion: number
  ) {
    this._id = _id;
    this.titulo = titulo;
    this.compania = compania;
    this.valoracion = valoracion;
  }

  //Necesitamos get() porque es un atributo privado
  public get id(): number {
    return this._id;
  }

  public toString(): string {
    return `Identificador: ${this._id}, Título: ${this.titulo}, Compañía: ${this.compania}, Valoración: ${this.valoracion}`;
  }
}
