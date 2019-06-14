import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../service/ScoreService';
import { NgForm } from '@angular/forms';
import { Score } from '../models/score';

declare var M: any;

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  providers: [ScoreService]
})
export class ScoreComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }
  ngOnInit() {
    this.getScores();
  }
  addScore(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.scoreService.putScore(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getScores();
          M.toast({ html: 'Updated Sucessfully' });
        });
    } else {
      this.scoreService.postScore(form.value)
        .subscribe(res => {
          this.getScores();
          this.resetForm(form);
          M.toast({ html: 'Save Sucessfully' });
        });
    }
  }
  getScores() {
    this.scoreService.getScore()
      .subscribe(res => {
        this.scoreService.Score = res as Score[];
      });
  }
  editScore(game: Score) {
    this.scoreService.selectedScore = game;
  }
  deleteScore(_id: string, form: NgForm) {
    if (confirm('Are you sure you want to delete this game?')) {
    this.scoreService.deleteScore(_id)
      .subscribe(res => {
          this.getScores();
          M.toast({html: 'Game deleted sucessfully'})
      });
  }
}
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.scoreService.selectedScore = new Score();
    }
  }
}
