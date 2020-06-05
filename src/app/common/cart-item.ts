import { Evento } from './evento';

export class CartItem {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;

    constructor(evento: Evento){
        this.id = evento.idevento;
        this.nome = evento.nome;
        this.preco = evento.preco;
        
        this.quantidade = 1;

    }
}
