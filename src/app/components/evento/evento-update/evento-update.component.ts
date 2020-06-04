import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/common/evento';
import { Casadeshow } from 'src/app/common/casadeshow';
import { CasadeshowService } from 'src/app/services/casadeshow.service';

@Component({
  selector: 'app-evento-update',
  templateUrl: './evento-update.component.html',
  styleUrls: ['./evento-update.component.css']
})
export class EventoUpdateComponent implements OnInit {


  constructor(private eventoService: EventoService, private casaDeShowService: CasadeshowService ,private routter: Router, private route: ActivatedRoute) { }

  evento: Evento
  casashow: Casadeshow[];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.eventoService.readById(id).subscribe(evento => {
      this.evento = evento
    });
  }

  updateEvento(): void{
    console.log('inicioooo')
    console.log(this.evento)
    this.eventoService.update(this.evento).subscribe(() => {
      this.eventoService.showMessage();
      this.routter.navigate(['/eventos'])
      console.log('fimmmmm')
    });
  
    }

  cancelEvento(): void{
    this.routter.navigate(['/eventos'])
  }

  TodasCasaShows(): void{
    this.casaDeShowService.read().subscribe(data => {
         this.casashow = data;
         console.log(data)
       });
     }
}
