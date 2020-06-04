import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Casadeshow } from '../common/casadeshow';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasadeshowService {

  baseUrl = "http://localhost:8080/casasdeshow"

  constructor(private http: HttpClient) { }

  showMessage(): void{
    alert('Ação concluída com sucesso!');
  }  

   create(casadeshow: Casadeshow): Observable<Casadeshow>{
     return this.http.post<Casadeshow>(this.baseUrl, casadeshow)
   }

   read(): Observable<Casadeshow[]>{
     return this.http.get<Casadeshow[]>(this.baseUrl)
  }

  readById(id: string): Observable<Casadeshow> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Casadeshow>(url)
  }

  update(casadeshow: Casadeshow): Observable<Casadeshow>{
    const url = `${this.baseUrl}/${casadeshow.idcasashow}`
    return this.http.put<Casadeshow>(url, casadeshow)
  }

  delete(id: number): Observable<Casadeshow>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Casadeshow>(url);
  }
}
