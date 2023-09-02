import { Component, OnDestroy, OnInit } from '@angular/core';
import { StarWarsService } from '../../star-wars.service';
import { Subscription, take } from 'rxjs';
import { iFilm } from '../../interface/iFilms';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit, OnDestroy {
  films!: iFilm[];
  private films$!: Subscription;
  private filmsImages!:any[];

  constructor(private starwarsService: StarWarsService) {
  }

  ngOnInit(): void {
    this.films$ = this.starwarsService.getFilms().subscribe(res => {
      this.films = res?.results;
      this.mapImages();
    }, error => {
      console.log('error while feteching start wars characters');
    });
    this.getFilmsImages();
  }


  private getFilmsImages(){
    const searchTerm = 'star wars films';
    this.starwarsService.getPixaBayImages(searchTerm).pipe(take(1)).subscribe(res => {
      this.filmsImages = res?.hits;
      this.mapImages();
    }, error => {
      console.log('error while feteching start wars characters');
    });
  }

  mapImages(){
    this.films = this.films?.map((planet, index)=>{
      const imagesCount = this.filmsImages?.length;
      if(this.filmsImages && imagesCount){
        const imageIndex = imagesCount < index ? index%imagesCount: index 
         planet.image_url= this.filmsImages[imageIndex]?.webformatURL;
      }
      return planet;
    });
  }

  ngOnDestroy(): void {
    this.films$.unsubscribe();
  }
  
}

