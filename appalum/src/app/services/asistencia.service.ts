import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asis } from '../interfaces/asis';
import { Asis2 } from '../interfaces/asis2';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http:HttpClient) { }


  listardatos():Observable<Asis>{
    return this.http.get<Asis>(`${environment.apiURL}/asistencia`)
  }

  creardatos(newasis: Asis2):Observable<Asis2>{
    return this.http.post<Asis2>(`${environment.apiURL}/asistencia`,newasis)
  }
}
