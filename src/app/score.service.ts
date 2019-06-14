import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Score } from '../app/models/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  selectedScore: Score;
  scores: Score[];
  readonly URL_API = 'http://localhost:3000/api/scores';

  constructor(private http: HttpClient) { }

  getScores() {
    return this.http.get(this.URL_API);
  }

  postScore(score) {
    return this.http.get(this.URL_API, score);
  }

  putScore(score: Score) {
    return this.http.put(this.URL_API + `/${score.id}`, 'score');
  }

  deleteScore(id: string) {
    return this.http.delete(this.URL_API + `/${id}`);
  }
}
