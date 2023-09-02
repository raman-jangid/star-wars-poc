interface iPlanet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: any[]; // Assuming residents is an array of some type
    films: string[]; // Assuming films is an array of URLs
    created: string;
    edited: string;
    url: string;
    image_url: string;
  }

  export {
    iPlanet
  }