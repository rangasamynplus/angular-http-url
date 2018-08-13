import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employess-list',
  templateUrl: './employess-list.component.html',
  styleUrls: ['./employess-list.component.css']
})
export class EmployessListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
          .subscribe(data => this.employees = data );
  }

}
