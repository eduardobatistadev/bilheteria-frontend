import { Component, OnInit } from '@angular/core';
import { CasadeshowService } from 'src/app/services/casadeshow.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Casadeshow } from 'src/app/common/casadeshow';

@Component({
  selector: 'app-casadeshow-delete',
  templateUrl: './casadeshow-delete.component.html',
  styleUrls: ['./casadeshow-delete.component.css']
})
export class CasadeshowDeleteComponent implements OnInit {

  constructor(private casaDeShowService: CasadeshowService, private router: Router, private route: ActivatedRoute) { }

  casadeshow: Casadeshow

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.casaDeShowService.readById(id).subscribe(casadeshow =>{
      this.casadeshow = casadeshow
    })
  }

  deleteCasaDeShow(): void{
    this.casaDeShowService.delete(this.casadeshow.idcasashow).subscribe(() => {
      this.casaDeShowService.showMessage();
      this.router.navigate(['/casasdeshow']);
    });
  
    }

  cancelCasaDeShow(): void{
    this.router.navigate(['/casasdeshow'])
  }

}
