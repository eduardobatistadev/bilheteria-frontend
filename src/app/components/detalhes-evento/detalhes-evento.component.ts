import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/common/evento';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrls: ['./detalhes-evento.component.css']
})
export class DetalhesEventoComponent implements OnInit {

  constructor(private cartService: CartService,private eventoService: EventoService, private routter: Router, private route: ActivatedRoute) { }

  evento: Evento
  event: Evento[] = [];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventoService.readById(id).subscribe(evento =>{
      this.evento = evento
    })
  }

  addToCart(theEvent: Evento){
    console.log(`Adicionar ao Carrinho: ${theEvent.nome}, ${theEvent.preco}`);

    const theCartItem = new CartItem(theEvent);

    this.cartService.addToCart(theCartItem);
  }
}
