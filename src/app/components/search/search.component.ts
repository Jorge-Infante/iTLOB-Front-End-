import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  empleados : any []=[];
  loading : boolean=false;
  constructor(private http : HttpClient, private employee : EmployeeService) {

  }

  buscar(termino :string){
    this.loading=true;
    console.log(termino);
    if(termino==''){
      this.empleados=[];
      this.employee.getListEmployees()
      .subscribe((data:any)=>{
        console.log(data);
        this.empleados = data;
        this.loading=false;
      }); 
    }else{
      this.empleados=[];
      this.employee.getEmployees(termino)
      .subscribe((data:any) =>{
        console.log(data);
        this.empleados = data;
        this.loading=false;
      });
    }

  }

}
