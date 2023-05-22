import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Affiliate } from '../../models/affiliate.model';
import { CrudAffiliate } from '../../models/crud-affiliate.model';
import { IService } from '../../base/service-interface';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService implements IService<Affiliate> {

  private affUrl = "/api/controller/affiliates";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Affiliate[]>(this.affUrl);
  }

  getById(id: number) {
    return this.http.get<Affiliate>(`${this.affUrl}/${id}`)
  }

  save(newReg: CrudAffiliate) {
    return this.http.post<Affiliate>(this.affUrl, newReg);
  }

  update(existing: CrudAffiliate, id: number) {
    return this.http.put<Affiliate>(`${this.affUrl}?affiliateId=${id}`, existing)
  }

  delete(id: number) {
    return this.http.delete(`${this.affUrl}/${id}`, {observe: 'response'})
  }
}
