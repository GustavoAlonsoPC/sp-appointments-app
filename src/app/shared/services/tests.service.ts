import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  private testUrl = "/api/controller/tests";
  constructor(private http: HttpClient) { }

  getAllTests() {
    return this.http.get<Test[]>(this.testUrl);
  }
}
