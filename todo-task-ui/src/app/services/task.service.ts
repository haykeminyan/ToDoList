import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
const baseUrl = 'http://localhost:8000/api/task'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }
  get(){
    const url = `http://localhost:8000/api/task`
    console.log(this.http.get<HttpResponse<any>>(url, { observe: 'response' }))
    return this.http.get<HttpResponse<any>>(url, { observe: 'response' })
  }
  getTask(id: any){
    const url = `http://localhost:8000/api/task/${id}`
    console.log(`http://localhost:8000/api/task/${id}`)
    return this.http.get<HttpResponse<any>>(url, { observe: 'response' })
  }
}
