import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

      public gifList: Gif[] =[];

      private _tagsHistory : string[] = [];
      private apiKey: string = 'rG56mROM3ZqbNxDDUyynKddt0FXDeXot';
      private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

      constructor(private http: HttpClient){}

      //operaador spreet para la copia del historial
      get historial(){
        return [...this._tagsHistory];
      }

      private organizeHistory(tag: string){

        tag = tag.toLowerCase();
        //para que el tag no se repita
        if( this._tagsHistory.includes(tag)){
          this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }
        this._tagsHistory.unshift(tag);
        this._tagsHistory = this._tagsHistory.splice(0,10);
        }
        private saveLocalStorage(): void {
          localStorage.setItem('history', JSON.stringify(this._tagsHistory));
        }

      //propiedad para añadir al inicio
        searchTag(tag: string): void{

        if( tag.length === 0) return;
        this.organizeHistory(tag);

        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '12')
        .set('q', tag)


        this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
        .subscribe(resp => {

        this.gifList = resp.data
        })
          //Promesa
        // fetch('https://api.giphy.com/v1/gifs/search?api_key=rG56mROM3ZqbNxDDUyynKddt0FXDeXot&q=valorant&limit=10')
        // .then(resp => resp.json())
        // .then(data => console.log(data));
      }
}
