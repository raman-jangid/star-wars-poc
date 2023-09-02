interface iFilm {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[]; // Assuming characters is an array of URLs
    planets: string[]; // Assuming planets is an array of URLs
    starships: string[]; // Assuming starships is an array of URLs
    vehicles: string[]; // Assuming vehicles is an array of URLs
    species: string[]; // Assuming species is an array of URLs
    created: string;
    edited: string;
    url: string;
    image_url: string;
}

export { iFilm }