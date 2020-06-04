import { Evento } from './evento';
import { Usuario } from './usuario';

export class Casadeshow {
    idcasashow?: number;
    nome: string;
    endereco: string;
    capacidade: number;
    listEventos?: Array<Evento>;
    usuario? = new Usuario();
}
