import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
