import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments = [];

  constructor(private _departmentService: DepartmentService) { }

  ngOnInit() {
    this._departmentService.getDepartments()
          .subscribe(data => this.departments = data );
  }

}
