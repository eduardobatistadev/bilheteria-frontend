import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/common/evento';

@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrls: ['./detalhes-evento.component.css']
})
export class DetalhesEventoComponent implements OnInit {

  constructor(private eventoService: EventoService, private routter: Router, private route: ActivatedRoute) { }

  evento: Evento

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventoService.readById(id).subscribe(evento =>{
      this.evento = evento
    })
  }
}
