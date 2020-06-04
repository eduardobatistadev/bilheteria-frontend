import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../common/evento';
import { Observable } from 'rxjs';
import { Casadeshow } from '../common/casadeshow';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseUrl = "http://localhost:8080/eventos"

  constructor(private http: HttpClient) { }

  showMessage(): void{
    alert('Ação concluída com sucesso!');
  } 

   create(evento: Evento): Observable<Evento>{
     return this.http.post<Evento>(this.baseUrl, evento)
   }

   read(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.baseUrl)
 }
    readById(id: string): Observable<Evento> {
      const url = `${this.baseUrl}/${id}`
      return this.http.get<Evento>(url)
    }

    update(evento: Evento): Observable<Evento>{
      const url = `${this.baseUrl}/${evento.idevento}`
      return this.http.put<Evento>(url, evento)
    }
  
    delete(id: number): Observable<Evento>{
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<Evento>(url);
    }
   

}
