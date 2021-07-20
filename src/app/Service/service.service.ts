import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Park } from '../Model/Park';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:9000/api/v1/";

  getParks() {
    return this.http.get<Park[]>(this.baseUrl + "listar");
  }

  createPark(park:Park) {
    return this.http.post<Park>(this.baseUrl + "guardar", park);
  }
}
