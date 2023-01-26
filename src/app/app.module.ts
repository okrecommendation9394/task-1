import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { shownames } from './shownames.pipes';
import { age } from './age.pipes';
import { StatusDirective } from './status.directive';

@NgModule({
  declarations: [AppComponent, CardComponent, shownames, age, StatusDirective],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
