import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
const baseUrl = 'http://localhost:8000/api/task'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
    this.get()
  }

  get(){
    const url = `http://localhost:8000/api/task`
    console.log(`http://localhost:8000/api/task`)
    return this.http.get<HttpResponse<any>>(url, { observe: 'response' })
  }
}
