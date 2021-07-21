import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { 
    console.log('listo para usar');
  }

  getQuery(query:string){
    const url = `http://127.0.0.1:8000/${query}`;

    return this.http.get(url);
  }

  getListEmployees(){
    return this.getQuery('api/employee/list/')
    .pipe(map((data:any)=>{
      return data


    }));
  }
  getEmployees(termino:string){
    return this.getQuery(`api/employee/listId/${termino}/`)
    .pipe(map((data:any)=>{
      return data;
    }));
  }
}


