import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Affiliate } from '../../models/affiliate.model';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService {

  private afftUrl = "/api/controller/affiliates";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Affiliate[]>(this.afftUrl);
  }

  getById(id: number) {
    return this.http.get<Affiliate>(`${this.afftUrl}/${id}`)
  }

  save(newAff: {name: string, age: number, mail: string}) {
    return this.http.post<Affiliate>(this.afftUrl, newAff);
  }

  update(existing: {name?: string, age?: number, mail?: string}, id: number) {
    return this.http.put<Affiliate>(`${this.afftUrl}?affiliateId=${id}`, existing)
  }
}
