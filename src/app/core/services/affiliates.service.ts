import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Affiliate } from '../../shared/models/affiliate.model';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService {
  getById(id: number) {
    return this.http.get<Affiliate>(`${this.afftUrl}/${id}`)
  }

  private afftUrl = "/api/controller/affiliates";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Affiliate[]>(this.afftUrl);
  }

  save(newAff: {name: string, age: number, mail: string}) {
    return this.http.post<Affiliate>(this.afftUrl, newAff);
  }
}
