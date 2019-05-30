import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../shared/employee.interface';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee.list.component.html',
    styleUrls: ['./employee.list.component.css']
})
export class EmployeeListComponent implements OnInit{
    employeeList: IEmployee[];

    ngOnInit() {
        this.employeeList = [{
            'id': '1',
            'createdAt': '2018-12-03T11:37:42.015Z',
            'name': 'Ms. Gaylord Streich',
            'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg'
        }, {
            'id': '2',
            'createdAt': '2018-12-02T21:06:49.825Z',
            'name': 'Roxanne Kunde',
            'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg'
        }];
    }

    showName(userName) {
        alert(userName);
    }
}
