import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './types.model';
@Pipe({
  name: 'age',
})
export class age implements PipeTransform {
  transform(value: any, ...args: any[]) {
    const ageDifMs = Date.now() - value.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
