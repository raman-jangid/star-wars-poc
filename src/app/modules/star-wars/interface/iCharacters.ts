interface iCharacter {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string; // Assuming homeworld is a URL
    films: string[]; // Assuming films is an array of URLs
    species: string[]; // Assuming species is an array of URLs
    vehicles: string[]; // Assuming vehicles is an array of URLs
    starships: string[]; // Assuming starships is an array of URLs
    created: string;
    edited: string;
    url: string;
    image_url: string;
  }

  export { iCharacter}
  