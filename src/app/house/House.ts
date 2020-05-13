export class House {
    title: string;
    type: string;
    direction: string;
    zipcode: string;
    city: string;
    state: string;
    country: string;
    cost: number;
    cap: number;
    description: string;
    playlist: string;
    foto: string;
    services: Array<number>;

    constructor(title: string,
                type: string,
                direction: string,
                zipcode: string,
                city: string,
                state: string,
                country: string,
                cost: number,
                cap: number,
                description: string,
                playlist: string,
                foto: string,
                services: Array<number>) {
    this.title = title;
    this.type = type;
    this.direction = direction;
    this.zipcode = zipcode;
    this.city = city;
    this.state = state;
    this.country = country;
    this.cost = cost;
    this.cap = cap;
    this.description = description;
    this.playlist = playlist;
    this.foto = foto;
    this.services = services;
    }

}
