import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee.details.component.html',
    styleUrls: ["./employee.details.component.css", "./employee.details.component.other.css"]
})
export class EmployeeDetailsComponent {
    
    @Input() employee;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    aaaa(employee) {
        this.notify.emit("User Clicked: " + employee.name);
    }

}
