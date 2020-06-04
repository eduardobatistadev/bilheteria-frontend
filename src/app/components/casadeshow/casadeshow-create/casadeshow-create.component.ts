import { Component, OnInit } from '@angular/core';
import { CasadeshowService } from 'src/app/services/casadeshow.service';
import { Router } from '@angular/router';
import { Casadeshow } from 'src/app/common/casadeshow';
import { Usuario } from 'src/app/common/usuario';

@Component({
  selector: 'app-casadeshow-create',
  templateUrl: './casadeshow-create.component.html',
  styleUrls: ['./casadeshow-create.component.css']
})
export class CasadeshowCreateComponent implements OnInit {

  casaDeShow: Casadeshow = {
    nome: 'Vila Mix',
    endereco: 'Rua Cravolandia',
    capacidade: 500,
  }

  constructor(private casaDeShowService: CasadeshowService, private router: Router) { }


  ngOnInit(): void {
  }

  createCasaDeShow(): void{
    this.casaDeShowService.create(this.casaDeShow).subscribe(() => {
      this.casaDeShowService.showMessage();
      this.router.navigate(['/casasdeshow'])
    })

  }

  cancelCasaDeShow(): void{
    this.router.navigate(['/casasdeshow'])
  }

}
