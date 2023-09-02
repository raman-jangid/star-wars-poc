import { Component, OnDestroy, OnInit } from '@angular/core';
import { StarWarsService } from '../../star-wars.service';
import { Subscription, take } from 'rxjs';
import { iSpecie } from '../../interface/iSpecies';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent {
  species!: iSpecie[];
  private species$!: Subscription;
  private speciesImages!:any[];

  constructor(private starwarsService: StarWarsService) {
  }

  ngOnInit(): void {
    this.species$ = this.starwarsService.getSpecies().subscribe(res => {
      this.species = res?.results;
      this.mapImages();
    }, error => {
      console.log('error while feteching Star Wars Species');
    });
    this.getSpeciesImages();
  }


  private getSpeciesImages(){
    const searchTerm = 'Star war characters';
    this.starwarsService.getPixaBayImages(searchTerm).pipe(take(2)).subscribe(res => {
      this.speciesImages = res?.hits;
      this.mapImages();
    }, error => {
      console.log('error while feteching Star Wars species images');
    });
  }

  mapImages(){
    this.species = this.species?.map((planet, index)=>{
      const imagesCount = this.speciesImages?.length;
      if(this.speciesImages && imagesCount){
        const imageIndex = imagesCount < index ? index%imagesCount: index; 
         planet.image_url= this.speciesImages[imageIndex]?.webformatURL;
      }
      return planet;
    });
  }

  ngOnDestroy(): void {
    this.species$.unsubscribe();
  }
}
