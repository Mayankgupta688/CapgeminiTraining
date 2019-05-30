import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];


import { EmployeeDetailsComponent } from './employee-details/employee.details.component';
import { EmployeeListComponent } from './employee-list/employee.list.component';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [EmployeeListComponent]
})
export class AppModule { }
