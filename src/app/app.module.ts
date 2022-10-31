import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResultModule } from '@lonli-lokli/ng-result';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResultModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
