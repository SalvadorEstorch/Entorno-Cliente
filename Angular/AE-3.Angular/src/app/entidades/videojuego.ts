export class videojuego {
  //Es un atributo privado
  private _id: number = 0;

  //El constructor que recibe por parametros de entrada los valores y crea el videojuego
  constructor(
    _id: number,
    public titulo: string,
    public compañia: string,
    public valoracion: string
  ) {
    this._id = _id;
    this.titulo = titulo;
    this.compañia = compañia;
    this.valoracion = valoracion;
  }

  //Necesitamos get() porque es un atributo privado
  public get id(): number {
    return this._id;
  }

  public toString(): string {
    return `Identificador: ${this._id}, Título: ${this.titulo}, Compañía: ${this.compañia}, Valoración: ${this.valoracion}`;
  }
}
