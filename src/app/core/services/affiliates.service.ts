import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Affiliate } from '../../shared/models/affiliate.model';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService {

  private testUrl = "/api/controller/affiliates";
  constructor(private http: HttpClient) { }

  getAllAffiliates() {
    return this.http.get<Affiliate[]>(this.testUrl);
  }
}
