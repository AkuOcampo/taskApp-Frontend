type Estados = 'PORHACER' | 'PORTESTEAR' | 'ENPRODUCCION' | 'COMPLETADA'

//Defino el esqueleto que tengo en mi api
export interface Task {
    id?: number;
    titulo: string;
    descripcion: string;
    tiempo: number;
    imagen: string;
    responsable: string;
    estado: Estados
}