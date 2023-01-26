import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../types.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Person | undefined;
  setStatusBackground() {
    return {
      active: this.card?.status == 'active',
      deleted: this.card?.status == 'deleted',
      inactive: this.card?.status == 'inactive',
    };
  }
  get data() {
    return this.dataService;
  }
  constructor(private dataService: DataService) {}
  ngOnInit(): void {}
}
