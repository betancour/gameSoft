const mongoose = require('mongoose');

const { Schema } = mongoose;

const GameScore = new Schema ({

    team: {type: String, require: true},
    game: { type: Number, required: true},
    date: { type: Date, required: true},
    points: { type: Number, required: true},
    score: { type: Number, required: true}

});

module.exports = mongoose.model('Score', GameScore);
