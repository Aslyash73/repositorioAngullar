import { Component, ElementRef, ViewChild} from '@angular/core';


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


    constructor (){}

    searchTag (){
        const newTag = this.tagInput.nativeElement.value;
      console.log({newTag});
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
