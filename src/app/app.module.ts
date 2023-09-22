import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './gifs/pages/home/home-page.component';
import { BusquedaComponent } from './gifs/components/busqueda/busqueda.component';
import { CardListComponent } from './gifs/components/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BusquedaComponent,
    CardListComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //terceras personas
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
