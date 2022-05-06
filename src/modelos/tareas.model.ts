export class Tareas{
    titulo: string;
    descripcion : String;
    completada: boolean;

    constructor(tTitulo='', tDescripcion=''){
        this.titulo = tTitulo;
        this.descripcion = tDescripcion;
        this.completada = false;

    }
}