import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { ListComponent } from './dbz/components/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //terceras personas
    SharedModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
