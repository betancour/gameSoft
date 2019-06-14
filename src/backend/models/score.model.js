const mongoose = require('mongoose');

const { Schema } = mongoose;

const GameScore = new Schema ({

    team: {type: String, require: false},
    game: { type: Number, required: false},
    date: { type: String, required: false},
    points: { type: Number, required: false},
    score: { type: Number, required: false}

});

module.exports = mongoose.model('Score', GameScore);
