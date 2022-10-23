export class Persona {

    id?: number;
    imgportada: string;
    imgfoto: string;
    nombre: string;
    profesion: string;
    descripcion: string;
    instagram: string;
    telefono: string;
    e_mail: string;

    constructor(imgportada: string, imgfoto: string, nombre: string, profesion: string, descripcion: string, instagram: string, telefono: string, e_mail: string) {

        this.imgportada = imgportada;
        this.imgfoto = imgfoto;
        this.nombre = nombre;
        this.profesion = profesion;
        this.descripcion = descripcion;
        this.instagram = instagram;
        this.telefono = telefono;
        this.e_mail = e_mail;
    }
}
