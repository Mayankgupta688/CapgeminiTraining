import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculateSum'
})
export class FilterIdSumPipe implements PipeTransform {
    transform(value: string, employeeList: any) {
        var sum = 0;
        for(var i = 0; i < employeeList.length; i++) {
            sum += +employeeList[i].id;
        }

        return sum;
    }
}