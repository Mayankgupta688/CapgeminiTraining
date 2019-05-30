import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'addSalutation'
})
export class AddSalutationPipe implements PipeTransform {
    transform(value: string, id: string) {
        if (+id % 2 === 0) {
            return 'Junior ' + value;
        } else { return 'Senior ' + value; }
    }
}
