const express = require('express');
const app = express();

const { mongoose } = require('./database');
 
app.set('port', process.env.PORT || 3000);


app.use('/api/score', require('./routes/score.router'));

app.use(express.json());

app.listen(3000, () => {
    console.log('server on port 3000', app.get('port'));
});
