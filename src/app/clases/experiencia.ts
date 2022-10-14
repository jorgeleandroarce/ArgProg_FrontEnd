export class Experiencia {

    id?: number;
    empresa: string;
    logoempresa: string;
    sitioweb: string;
    telefono: string;
    cargo: string;
    periodo: string;
    descripcion: string;

    constructor(empresa: string, logoempresa: string, sitioweb: string, telefono: string, cargo: string, periodo: string, descripcion: string) {

        this.empresa = empresa;
        this.logoempresa = logoempresa;
        this.sitioweb = sitioweb;
        this.telefono = telefono;
        this.cargo = cargo;
        this.periodo = periodo;
        this.descripcion = descripcion;
    }
}
