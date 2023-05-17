import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../../shared/models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  private testUrl = "/api/controller/tests";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Test[]>(this.testUrl);
  }

  getById(idTest: number) {
    return this.http.get<Test>(`${this.testUrl}/${idTest}`);
  }

  save(newTest: {name: string, description: string}) {
    return this.http.post<Test>(this.testUrl, newTest);
  }

  update(existing: {name?: string, description?: string}, id: number) {
    return this.http.put<Test>(`${this.testUrl}?testId=${id}`, existing)
  }
}
