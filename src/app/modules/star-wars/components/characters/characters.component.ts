import { Component, OnDestroy, OnInit } from '@angular/core';
import { StarWarsService } from '../../star-wars.service';
import { Subscription, take } from 'rxjs';
import { iCharacter } from '../../interface/iCharacters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters!: iCharacter[];
  private characters$!: Subscription;
  private characterImages!:any[];

  constructor(private starwarsService: StarWarsService) {
  }

  ngOnInit(): void {
    this.characters$ = this.starwarsService.getCharaters().subscribe(res => {
      this.characters = res?.results;
      this.mapImages();
    }, error => {
      console.log('error while feteching Star wars characters');
    });
    this.getCharacterImages();
  }


  private getCharacterImages(){
    const searchTerm = 'star wars characters';
    this.starwarsService.getPixaBayImages(searchTerm).pipe(take(1)).subscribe(res => {
      this.characterImages = res?.hits;
      this.mapImages();
    }, error => {
      console.log('error while feteching Star wars character images');
    });
  }

  mapImages(){
    this.characters = this.characters?.map((planet, index)=>{
      const imagesCount = this.characterImages?.length;
      if(this.characterImages && imagesCount){
        const imageIndex = imagesCount < index ? index%imagesCount: index 
         planet.image_url= this.characterImages[imageIndex]?.webformatURL;
      }
      return planet;
    });
  }

  ngOnDestroy(): void {
    this.characters$.unsubscribe();
  }

}

