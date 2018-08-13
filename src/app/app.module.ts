import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; 
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployessListComponent } from './employess-list/employess-list.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    EmployessListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    RouterModule.forRoot([  
      { path: 'departments', component: DepartmentListComponent },  
      { path: 'employees', component: EmployessListComponent },
      { path: 'employees:id', component: EmployessListComponent },
    ]) 
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
