interface iSpecie {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string; // Assuming this is the URL of the homeworld
    language: string;
    people: string[]; // Assuming people is an array of URLs
    films: string[]; // Assuming films is an array of URLs
    created: string;
    edited: string;
    url: string;
    image_url: string;
}

export { iSpecie }