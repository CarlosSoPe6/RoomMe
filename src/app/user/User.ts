export class User {
    uid: number;
    name: string;
    lastName: string;
    email: string;
    photo: string;
    phone: string;
    verified: boolean;
    house: number;

    constructor(
        name: string,
        lastName: string,
        email: string,
        photo: string,
        phone: string,
        verified: boolean,
        house: number,
        uid = 0
    ) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.photo = photo;
        this.phone = phone;
        this.verified = verified;
        this.house = house;
    }
}
