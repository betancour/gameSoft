const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/books';

mongoose.connect(URI,{useNewUrlParser: true})
  .then(db => console.log('MongoDB Local is Connected...'))
  .catch(err => console.error(err));
  

module.exports = mongoose;