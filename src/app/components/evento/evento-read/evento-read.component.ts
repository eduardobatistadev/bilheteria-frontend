import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/common/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-evento-read',
  templateUrl: './evento-read.component.html',
  styleUrls: ['./evento-read.component.css']
})
export class EventoReadComponent implements OnInit {

  evento: Evento[]


  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventoService.read().subscribe(evento => {
      this.evento = evento
      console.log(evento)
      
    })
  }

}
