import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  /* get httpParams(){
    return new HttpParams()
    .set('fields', 'name,capital,flags,population,cca2');
  }
  this.httpClient.get<Country[]>(url, {params: this.httpParams})
  */

  buscarPais( termino: string): Observable<Country[]>{

    const params = new HttpParams()
                            .set('fields', 'name,capital,flags,population,cca2');

    const url = `${this.apiUrl}/name/${termino}`;
    return this.httpClient.get<Country[]>(url, {params});

  }

  buscarCapital( termino: string): Observable<Country[]>{

    const params = new HttpParams()
                            .set('fields', 'name,capital,flags,population,cca2');

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.httpClient.get<Country[]>(url, {params});

  }

  getPaisPorCodigo( id: string): Observable<Country>{

    const params = new HttpParams()
                            .set('fields', 'name,capital,flags,population,cca2,translations,continents,cca3');

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.httpClient.get<Country>(url, {params});

  }

  getPaisPorRegion( region: string): Observable<Country[]>{

    const params = new HttpParams()
                            .set('fields', 'name,capital,flags,population,cca2');

    const url = `${this.apiUrl}/region/${region}`;
    return this.httpClient.get<Country[]>(url, {params});

  }


}


