import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FrontresultComponent} from './frontresult/frontresult.component';
import {FormsModule} from '@angular/forms';
import { VueeventComponent } from './vueevent/vueevent.component';
@NgModule({
  declarations: [AppComponent, FrontresultComponent, VueeventComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
