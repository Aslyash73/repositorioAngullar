import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    HomePageComponent,
    BusquedaComponent,
    CardListComponent,
  ],
  exports: [
   HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
