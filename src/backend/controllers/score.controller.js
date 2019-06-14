const Score = require('../models/score.model');
const scoreCtrl= {};

scoreCtrl.getScores = async (req, res, next) => {
    const score = await Score.find();
    res.json(score);
};

scoreCtrl.getScore = async (req, res, next) => {
    const { id } = req.params;
    const score = await Score.findById(id);
    res.json(score);
};

scoreCtrl.createScores = async (req, res) => {
    const score = new Score({
        team: req.body.team,
        game: req.body.game,
        date: req.body.date,
        points: req.body.points,
        score: req.body.score
    });
await score.save();
    res.json({status: 'Score created'});

}; 

scoreCtrl.editScores = async (req, res, next) => {
    const { id } = req.params;
    const score = {
        team: req.body.team,
        game: req.body.game,
        points: req.body.points,
        score: req.body.score
    };
await Score.findByIdAndUpdate(id, {$set: Score}, {new: true});
    res.json({status: 'Score'});
};

scoreCtrl.deleteScores = async (req, res, next) => {
await Score.findByIdAndRemove(req.params.id);
    res.json({status: 'Score Deleted'});
};

module.exports = scoreCtrl;
