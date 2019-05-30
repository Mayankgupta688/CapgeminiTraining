import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee.details.component';
import { EmployeeListComponent } from './employee-list/employee.list.component';
import { AddSalutationPipe } from './pipes/employee.list.pipe';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeListComponent,
    AddSalutationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EmployeeListComponent]
})
export class AppModule { }
