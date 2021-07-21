import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
  empleados : any [] = []

  constructor(private router : ActivatedRoute, private employees:EmployeeService) {
    this.employees.getListEmployees()
    .subscribe((data:any)=>{
      console.log(data);
      this.empleados = data;
      // this.loading=false;
    });               
  }


}
