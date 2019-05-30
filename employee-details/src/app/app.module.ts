import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];


import { EmployeeDetailsComponent } from './employee-details/employee.details.component';
import { EmployeeListComponent } from './employee-list/employee.list.component';
import { FilterNamePipe } from "./shared/employee.name.filter";
import { FilterIdSumPipe } from "./shared/employee.id.sum";

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeListComponent,
    FilterNamePipe,
    FilterIdSumPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [EmployeeListComponent]
})
export class AppModule { }
