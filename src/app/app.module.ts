import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import { alarm, penFill } from 'ngx-bootstrap-icons';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SimpleNotificationsModule } from 'angular2-notifications';


// Select some icons (use an object, not an array)
const icons = {
  alarm,
  penFill};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,
    NgxBootstrapIconsModule.pick(icons),BrowserAnimationsModule,LoadingBarHttpClientModule,SimpleNotificationsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
