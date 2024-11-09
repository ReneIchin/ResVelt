import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5099/api';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders{
    return new HttpHeaders({
      'X-Api-Key':'6f74a0b53a5f4ac5b913bd7c55c05b5f',
      'user-id':''
    });
  }

  getAll<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, { headers: this.getHeaders() });
  }

  getById<T>(endpoint: string, id:string):Observable<T>{
    return this.http.get<T>(`${this.apiUrl}/${endpoint}/${id}`, { headers: this.getHeaders() });
  }

  create(endpoint: string, data: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.apiUrl}/${endpoint}`, data, { headers: this.getHeaders(),observe: 'response' });
  }

  update<T>(endpoint: string, id: number, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}/${id}`, data, { headers: this.getHeaders() });
  }

  delete<T>(endpoint: string, id: number): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}/${id}`, { headers: this.getHeaders() });
  }




}
