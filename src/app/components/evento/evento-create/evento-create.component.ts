import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { Router } from '@angular/router';
import { Evento } from 'src/app/common/evento';
import { Casadeshow } from 'src/app/common/casadeshow';
import { CasadeshowService } from 'src/app/services/casadeshow.service';
import { CasadeshowComponent } from '../../casadeshow/casadeshow.component';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {

  casadeshow: Casadeshow [] = [];

  evento: Evento = {
    nome: 'Vila Mix',
    descricao: 'O Maior evento de todos',
    ingressos: 100,
    preco: 50,
    casaDeShow: new Casadeshow

  }
  
  constructor(private casashowService: CasadeshowService,private eventoService: EventoService, private router: Router) { }

  ngOnInit(): void {
    this.TodasCasaShows
  }

  createEvento(): void{
    this.eventoService.create(this.evento).subscribe(() => {
      this.eventoService.showMessage();
      this.router.navigate(['/eventos'])
    })

  }


  cancelEvento(): void{
    this.router.navigate(['/eventos'])
  }

  TodasCasaShows(): void{
    this.casashowService.read().subscribe(data => {
      this.casadeshow = data;
    });
  }

 
}
