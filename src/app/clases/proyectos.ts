export class Proyectos {

    id?: number;
    nombre: string;
    logo: string;
    url: string;
    fecha: string;
    descripcion: string;

    constructor(nombre: string, logo: string, url: string, fecha: string, descripcion: string) {
        this.nombre  = nombre;
        this.logo  = logo;
        this.url  = url;
        this.fecha  = fecha;
        this.descripcion  = descripcion;
    }
}
