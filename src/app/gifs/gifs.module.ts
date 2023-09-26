import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BusquedaComponent,
    CardComponent,
    CardListComponent,
    HomePageComponent,
  ],
  exports: [
   HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GifsModule { }
