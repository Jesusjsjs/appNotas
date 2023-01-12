import { Injectable } from '@angular/core';
import { NotasI } from '../../models/notas/notas.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = 'http://localhost/3000';

  constructor( private http: HttpClient) { }

  getAllNotes():Observable<NotasI[]>{
    return this.http.get<NotasI[]>( this.urlAPI );
  }
}
