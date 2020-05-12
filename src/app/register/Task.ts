export class Task {
    tid: number;
    authorId: number;
    houseId: number;
    description: string;
    creationDate: Date;
    complete: boolean;

    constructor(
                tid: number,
                authorId: number,
                houseId: number,
                description: string,
                creationDate: Date,
                complete: boolean) {
            this.tid = tid;
            this.authorId = authorId;
            this.houseId = houseId;
            this.description = description;
            this.creationDate = creationDate;
            this.complete = complete;
        }
}