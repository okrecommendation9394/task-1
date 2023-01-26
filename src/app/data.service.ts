import { Injectable } from '@angular/core';
import { Person } from './types.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: Person[] = [
    {
      firstName: 'Keti',
      lastName: 'Gogia',
      about: 'about me',
      birthDate: new Date(1999, 4, 19),
      status: 'active',
    },
    {
      firstName: 'Keti',
      lastName: 'Gogia',
      about: 'about me',
      birthDate: new Date(1999, 1, 19),
      status: 'deleted',
    },
    {
      firstName: 'Keti',
      lastName: 'Gogia',
      about: 'about me',
      birthDate: new Date(1999, 4, 19),
      status: 'inactive',
    },
  ];
  constructor() {}
}
