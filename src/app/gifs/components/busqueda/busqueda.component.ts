import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar:</h5>
    <input type="text"
       class="form-control"
       placeholder="Buscar gifs..."
       (keyup.enter)="searchTag()"
       #txtTagInput>
  `

})
export class BusquedaComponent {

   @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

    //inyectar servicio en el constructor
    constructor (private gifsService: GifsService){}

    searchTag (){
      const newTag = this.tagInput.nativeElement.value;
      this.gifsService.searchTag(newTag);

      this.tagInput.nativeElement.value = '';



    }



  // constructor( private gifsService: GifsService){}

  //  buscar(){
  //   const valor = this.txtBuscar.nativeElement.value;

  //   if (valor.trim().length === 0){
  //     return;
  //   }

  //   this.gifsService.buscarGifs(valor);

  //   this.txtBuscar.nativeElement.value= " ";
  //  }
}
