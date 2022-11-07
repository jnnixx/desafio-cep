import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cep } from '../interfaces/cep';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseURL: string = 'viacep.com.br/ws/'

  constructor(
    private http: HttpClient
  ) { }

  procurarCep(cep: string){
    return this.http.get<cep>(`${this.baseURL}${numeroCep}/json/`)
  }

}
