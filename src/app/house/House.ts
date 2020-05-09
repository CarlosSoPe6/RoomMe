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

    constructor(title: string,
                type: string,
                direction: string,
                zipcode: string,
                city: string,
                state: string,
                country: string,
                cost: number,
                cap: number,
                description: string) {
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
    }

}
