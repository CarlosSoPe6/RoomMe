export class Contact {
    uid: number;
    userId: number;
    name: string;
    lastName: string;
    email: string;
    phone: string;

    constructor(
        uid: number,
        userId: number,
        name: string,
        lastName: string,
        email: string,
        phone: string,
    ) {
        this.uid = uid;
        this.userId = userId;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
}