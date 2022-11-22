import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http:HttpClient) { }

  getTopHeadlines(){
    return this.Http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=79043caaa1d94b34898dd8e339329bf3')
  }
}
