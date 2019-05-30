import { Component, Input } from '@angular/core';
import { IEmployee } from '../shared/employee.interface';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee.details.component.html'
})
export class EmployeeDetailsComponent {
    @Input() employee: IEmployee;
}
