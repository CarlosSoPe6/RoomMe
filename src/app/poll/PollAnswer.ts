export class PollAnswer {
    pollId: number;
    userId: number;
    answers: Array<any>;

    constructor(
        pollId: number,
        userId: number,
        answers: Array<any>
    ) {
        this.answers = answers;
        this.pollId = pollId;
        this.userId = userId;
    }
}