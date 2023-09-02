import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class StarWarsService {

  constructor(private httpClient: HttpClient) { }

  getCharaters(): Observable<any> {
    return this.httpClient.get('https://swapi.dev/api/people');
  }

  getPlanets(): Observable<any> {
    return this.httpClient.get('https://swapi.dev/api/planets');
  }

  getFilms(): Observable<any> {
    return this.httpClient.get('https://swapi.dev/api/films');
  }

  getSpecies(): Observable<any> {
    return this.httpClient.get('https://swapi.dev/api/species');
  }

  getPixaBayImages(query: string): Observable<any> {  
    const params = {
      key: environment.PIXABAY_KEY,
      q: query
    }
    return this.httpClient.get(environment.PIXABAY_URL, { params });
  }


}