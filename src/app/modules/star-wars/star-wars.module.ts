import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarsRoutingModule } from './star-wars-routing.module';
import { CharactersComponent } from './components/characters/characters.component';
import { FilmsComponent } from './components/films/films.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarWarsService } from './star-wars.service';
import { PlanetsComponent } from './components/planets/planets.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    CharactersComponent,
    FilmsComponent,
    SpeciesComponent,
    PlanetsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    StarWarsRoutingModule
  ],
  providers: [StarWarsService]
})
export class  StarWarsModule { }
