import { Component } from '@angular/core';
import * as data from '../app-data/employeeList.json';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee.list.component.html'
})
export class EmployeeListComponent {
    employeeList: any[];

    constructor() {

        // tslint:disable-next-line:no-string-literal
        console.log();

        this.employeeList = data['default']
    }
}
