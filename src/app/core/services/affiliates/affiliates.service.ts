import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Affiliate } from '../../models/affiliate.model';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService {

  private affUrl = "/api/controller/affiliates";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Affiliate[]>(this.affUrl);
  }

  getById(id: number) {
    return this.http.get<Affiliate>(`${this.affUrl}/${id}`)
  }

  save(newAff: {name: string, age: number, mail: string}) {
    return this.http.post<Affiliate>(this.affUrl, newAff);
  }

  update(existing: {name?: string, age?: number, mail?: string}, id: number) {
    return this.http.put<Affiliate>(`${this.affUrl}?affiliateId=${id}`, existing)
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.affUrl}/${id}`)
  }
}
