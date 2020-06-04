import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/common/evento';
import { EventoService } from 'src/app/services/evento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento-delete',
  templateUrl: './evento-delete.component.html',
  styleUrls: ['./evento-delete.component.css']
})
export class EventoDeleteComponent implements OnInit {

  constructor(private eventoService: EventoService, private router: Router, private route: ActivatedRoute) { }

  evento: Evento

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventoService.readById(id).subscribe(evento =>{
      this.evento = evento
    })
  }

  deleteEvento(): void{
    this.eventoService.delete(this.evento.idevento).subscribe(() => {
      this.eventoService.showMessage();
      this.router.navigate(['/eventos']);
    });
  
    }

  cancelEvento(): void{
    this.router.navigate(['/eventos'])
  }


}
