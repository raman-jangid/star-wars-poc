import { Component, OnDestroy, OnInit } from '@angular/core';
import { StarWarsService } from '../../star-wars.service';
import { Subscription, take } from 'rxjs';
import { iPlanet } from '../../interface/iPlanets';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, OnDestroy {
  planets!: iPlanet[];
  private planets$!: Subscription;
  private planetImages!:any[];

  constructor(private starwarsService: StarWarsService) {
  }

  ngOnInit(): void {
    this.planets$ = this.starwarsService.getPlanets().subscribe(res => {
      this.planets = res?.results;
      this.mapImages();
    }, error => {
      console.log('error while feteching start wars characters');
    });
    this.getPlanetImages();
  }


  private getPlanetImages(){
    const searchTerm = 'star wars planets';
    this.starwarsService.getPixaBayImages(searchTerm).pipe(take(1)).subscribe(res => {
      this.planetImages = res?.hits;
      this.mapImages();
    }, error => {
      console.log('error while feteching start wars characters');
    });
  }

  mapImages(){
    this.planets = this.planets?.map((planet, index)=>{
      const imagesCount = this.planetImages?.length;
      if(this.planetImages && imagesCount){
        const imageIndex = imagesCount < index ? index%imagesCount: index 
         planet.image_url= this.planetImages[imageIndex]?.webformatURL;
      }
      return planet;
    });
  }

  ngOnDestroy(): void {
    this.planets$.unsubscribe();
  }

}
