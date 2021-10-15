require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const db = require('./db/db');

const productRouter = require('./routes/product-router');
const blogpostRouter = require('./routes/blogpost-router');

app.use(morgan('dev'));

// routes
app.use('/api/admin/products', productRouter);
app.use('/blogposts', blogpostRouter(db));

// catchall route
// app.get('*', (req, res) => {
//   // res.status(404).send('404');
//   res.redirect('/');
// });

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
