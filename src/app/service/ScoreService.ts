import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})

export class ScoreService {
  selectedScore: Score;
  Score: Score[];

  readonly URL_API = `http://localhost:3000/api/score`;

  constructor(private http: HttpClient) {
    this.selectedScore = new Score();
  }
  postScore(score: Score) {
    return this.http.post(this.URL_API, score);
  }
  getScore() {
    return this.http.get(this.URL_API);

  }
  putScore(score: Score) {
    return this.http.put(this.URL_API + `/${score._id}`, score);
  }
  deleteScore(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
