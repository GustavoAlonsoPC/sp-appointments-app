import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../../models/test.model';
import { IService } from '../../base/service-interface';
import { CrudTest } from '../../models/crud-test.model';

@Injectable({
  providedIn: 'root'
})
export class TestsService implements IService<Test> {

  private testUrl = "/api/controller/tests";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Test[]>(this.testUrl);
  }

  getById(idTest: number) {
    return this.http.get<Test>(`${this.testUrl}/${idTest}`);
  }

  save(newReg: CrudTest) {
    return this.http.post<Test>(this.testUrl, newReg);
  }

  update(existing: CrudTest, id: number) {
    return this.http.put<Test>(`${this.testUrl}?testId=${id}`, existing)
  }

  delete(id: number) {
    return this.http.delete(`${this.testUrl}/${id}`, {observe: 'response'})
  }
}
