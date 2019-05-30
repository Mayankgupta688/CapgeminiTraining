import { Component, OnInit } from '@angular/core';
import * as data from '../app-data/employeeList.json';
import { IEmployee } from '../shared/employee.interface';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee.list.component.html',
    styleUrls: ['./employee.list.component.css', 'employee.list.component.other.css']
})
export class EmployeeListComponent implements OnInit {

    username: string;
    password: string;

    ngOnInit() {
        this.employeeList = data['default'];
    }

    aaaa(message) {
        alert(message);
    }

    updateData() {
        alert(this.username);
        alert(this.password);
    }

    employeeList: IEmployee[];

    getUserName(employee) {

        alert(employee.name);
    }

    setUserName(name, employee) {

        employee.name = name;
    }
}
