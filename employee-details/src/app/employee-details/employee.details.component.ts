import { Component } from '@angular/core';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee.details.component.html'
})
export class EmployeeDetailsComponent {
    name: string;
    age: number;
    designation: string;
    salary: number;

    constructor() {
        this.name = 'Anshul Gupta';
        this.age = 100;
        this.designation = 'Developer',
        this.salary = 1000;
    }

    returnSalutation() {
        if (this.age > 10) {
            return 'Senior ';
        } else {
            return 'Junior ';
        }
    }
}
