export class Educacion {
    
    id?: number;
    escuela: string;
    logotipo: string;
    sitioweb: string;
    titulo: string;
    periodo: string;

    constructor(escuela: string, logotipo: string, sitioweb: string, titulo: string, periodo: string){
    this.escuela = escuela;
    this.logotipo = logotipo;
    this.sitioweb = sitioweb;
    this.titulo = titulo;
    this.periodo = periodo;
    }
}
