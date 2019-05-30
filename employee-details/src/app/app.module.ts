import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { EmployeeDetailsComponent } from './employee-details/employee.details.component';

@NgModule({
  declarations: [
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EmployeeDetailsComponent]
})
export class AppModule { }
