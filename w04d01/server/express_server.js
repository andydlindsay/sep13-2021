const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 12345;

const app = express();
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));

// app.get('/games/:game-id') req.params['game-id']

app.get('/flex', (req, res) => {
  res.render('flex');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
