import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading = false;
  showCards = false;
  toggleLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.showCards = true;
    }, 2000);
  }
  get data() {
    return this.dataService.data;
  }
  constructor(private dataService: DataService) {
    console.log(dataService.data);
  }
}
