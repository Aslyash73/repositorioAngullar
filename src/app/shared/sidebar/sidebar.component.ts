import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']

})
export class SidebarComponent {

  constructor(private gifService: GifsService){}
 // inyectar un servicio
  get historial(): string[]{
    return this.gifService.historial;
  }
  searchTag(item: string): void{
    this.gifService.searchTag(item);
  }

}
