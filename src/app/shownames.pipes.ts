import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './types.model';
@Pipe({
  name: 'shownames',
})
export class shownames implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value.map((elem: Person) => elem.firstName);
  }
}
