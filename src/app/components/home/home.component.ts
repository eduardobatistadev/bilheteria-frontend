import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/common/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  evento: Evento[]


  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventoService.read().subscribe(evento => {
      this.evento = evento
      console.log(evento)
      
    })
  }
}
