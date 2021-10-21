import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmpolyeeService {

  constructor(private http :HttpClient) { }
  url:string= "http://localhost:3000/employeedata";
  getemployeedata()
  {
    
    return this.http.get<any>(this.url);
  }
}
