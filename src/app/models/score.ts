export class Score {
    constructor(id= '', team= '', game= 0, date= '', points= 0, score= 0 ) {
        this.id = id;
        this.team = team;
        this.game = game;
        this.date = date;
        this.points = points;
        this.score = score;
    }
    id: string;
    team: string;
    game: number;
    date: string;
    points: number;
    score: number;
}
