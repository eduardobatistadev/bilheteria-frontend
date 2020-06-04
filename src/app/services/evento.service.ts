import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../common/evento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseUrl = "http://localhost:8080/eventos"

  constructor(private http: HttpClient) { }

  showMessage(): void{
    alert('Cadastro efetuado com sucesso!');
  } 

   create(evento: Evento): Observable<Evento>{
     return this.http.post<Evento>(this.baseUrl, evento)
   }

   read(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.baseUrl)
 }

   

}
