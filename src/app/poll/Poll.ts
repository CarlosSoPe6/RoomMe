export class Poll {
    pollid: number;
    title: string;
    descrption: string;
    createdBy: number;
    houseId: number;
    createdAt: Date;
    questions: Array<any>;
    constructor(
        pollid: number,
        title: string,
        descrption: string,
        createdBy: number,
        houseId: number,
        createdAt: Date,
        questions: Array<any>
    ) {
        this.pollid = pollid;
        this.title = title;
        this.descrption = descrption;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.houseId = houseId;
        this.questions = questions;
    }
}