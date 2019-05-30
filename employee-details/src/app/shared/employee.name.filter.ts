import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {
    transform(value: string, id: string) {
        if(+id % 2 == 0) {
            return "Even: " + value;
        } else {
            return "Odd: " + value;
        }
    }
}