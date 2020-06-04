import { Component, OnInit } from '@angular/core';
import { Casadeshow } from 'src/app/common/casadeshow';
import { CasadeshowService } from 'src/app/services/casadeshow.service';

@Component({
  selector: 'app-casadeshow-read',
  templateUrl: './casadeshow-read.component.html',
  styleUrls: ['./casadeshow-read.component.css']
})
export class CasadeshowReadComponent implements OnInit {

  casasdeshow: Casadeshow[]

  constructor(private casaDeShowService: CasadeshowService) { }

  ngOnInit(): void {
    this.casaDeShowService.read().subscribe(casasdeshow => {
      this.casasdeshow = casasdeshow
      console.log(casasdeshow)
      
    })
  }

}
