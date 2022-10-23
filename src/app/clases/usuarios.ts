export class Usuarios {

    id?: number;

    nombre: string;
    password: string;
    email: string;

    constructor(nombre: string, password: string, email: string) {

        this.nombre = nombre;
        this.password = password;
        this.email = email;
    }
}
