export class Score {

  constructor(_id = '', team = '', game = 0, date = '', points = 0) {
      this._id = _id;
      this.team = team;
      this.game = game;
      this.date = date;
      this.points = points;
  }

  _id: string;
  game: number;
  team: string;
  date: string;
  points: number;
}
