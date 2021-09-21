import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciclo } from '../models/ciclo.model';
import { Usuario } from '../models/usuario.model';

const baseUrl = 'http://localhost:8090/rest/util';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http:HttpClient) { }

  listarCiclos(): Observable<Ciclo[]>{
    return this.http.get<Ciclo[]>(baseUrl + '/ciclo');
  }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(baseUrl + '/usuario');
  }
}
