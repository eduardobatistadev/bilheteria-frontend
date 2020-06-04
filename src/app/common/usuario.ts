import { Casadeshow } from './casadeshow';
import { Pedido } from './pedido';

export class Usuario {
    idcliente: number;
    nome: string;
    sobrenome: string;
    email: string;
    dt_nasc: Date;
    telefone: string;
    senha: string;
    listCasaDeShow: Array<Casadeshow>;
    listPedidos: Array<Pedido>;
}
