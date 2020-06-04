import { Component, OnInit } from '@angular/core';
import { CasadeshowService } from 'src/app/services/casadeshow.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Casadeshow } from 'src/app/common/casadeshow';

@Component({
  selector: 'app-casadeshow-update',
  templateUrl: './casadeshow-update.component.html',
  styleUrls: ['./casadeshow-update.component.css']
})
export class CasadeshowUpdateComponent implements OnInit {

  constructor(private casaDeShowService: CasadeshowService, private routter: Router, private route: ActivatedRoute) { }

  casadeshow: Casadeshow

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.casaDeShowService.readById(id).subscribe(casadeshow => {
      this.casadeshow = casadeshow
    });
  }

  updateCasaDeShow(): void{
    this.casaDeShowService.update(this.casadeshow).subscribe(() => {
      this.casaDeShowService.showMessage();
      this.routter.navigate(['/casasdeshow'])
    });
  
    }

  cancelCasaDeShow(): void{
    this.routter.navigate(['/casasdeshow'])
  }

}
