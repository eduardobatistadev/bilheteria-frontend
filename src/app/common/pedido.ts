import { Usuario } from './usuario';
import { Evento } from './evento';

export class Pedido {
    idpedido: number;
    total: number;
    data_compra: Date;
    quantidade: number;
    usuario: Usuario;
    evento: Evento;
}
