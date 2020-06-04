import { Casadeshow } from './casadeshow';

export class Evento {
    idevento?: number;
    nome: string;
    descricao: string;
    dt_inicio?: Date;
    dt_fim?: Date;
    ingressos: number;
    preco: number;
    casadeshow?: Casadeshow;
}
