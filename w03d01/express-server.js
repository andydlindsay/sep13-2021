const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 2345;

// middleware
// app.use((req, res, next) => {
//   console.log('incoming request:', req.method, req.url);
//   // res.send('hello from the middleware');
//   next();
// });

app.use(morgan('dev'));

// const morganMiddleware = morgan('dev');
// app.use(morganMiddleware);



// GET /home
app.get('/home', (request, response) => {
  response.send('welcome to our website');
  // response.json({ message: 'hello' });
  // response.sendFile('/index.html');
});

// GET /products
app.get('/products', (req, res) => {
  res.send('these are all the products for sale!');
});

// default / catch-all
app.get('*', (req, res) => {
  // res.status(404);
  res.statusCode = 404;
  res.send('this is not the page you are looking for');
  return;

  res.status(404).send('not the page you are looking for');
});

app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
});
