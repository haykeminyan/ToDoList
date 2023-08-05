import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }
  get(sortColumn: string, sortType: string, searchKey: string, currentPage: number,pageSize: number): Observable<HttpResponse<HttpResponse<any>>> {
    let url = `http://localhost:8000/api/task?p=${currentPage}&page_size=${pageSize}`
    if (sortColumn && sortType && searchKey){
      url = `${url}&q=${searchKey}&ordering=${sortColumn}`
    }
    if(sortColumn && sortType){
      url = `${url}&ordering=${sortColumn}`
    }
    console.log(url)

    return this.http.get<HttpResponse<any>>(url, { observe: 'response' });
  }
  getTask(id: any){
    const url = `http://localhost:8000/api/task/${id}`
    console.log(`http://localhost:8000/api/task/${id}`)
    return this.http.get<HttpResponse<any>>(url, { observe: 'response' })
  }

  delete(id: any): Observable<any> {
    const url = `http://localhost:8000/api/task/${id}`
    return this.http.delete(url)
  }

  post(data: any): Observable<HttpResponse<HttpResponse<any>>> {
    const url = 'http://localhost:8000/api/task'
    console.log(this.http.post<HttpResponse<any>>(url, data))
    return this.http.post<HttpResponse<any>>(url, data)
  }
}
