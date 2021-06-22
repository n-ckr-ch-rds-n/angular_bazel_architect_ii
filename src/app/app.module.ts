import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FrontendLibModule} from 'frontend-lib';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontendLibModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
