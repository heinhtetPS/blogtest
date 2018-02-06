require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

//make the app
const app = express();

//getting db
const blogFile = fs.readFileSync('./seeds/blogs.json', 'utf-8');
const blogArray = JSON.parse(blogFile);

//render index
app.get('/', (req, res) =>
  res.render('hello'));
// app.get('/', (req, res) =>
//   res.render('index', {
//     blogs: blogArray
//   })
// );

//server log
app.listen(3000, () => console.log('i am listening on port 3000'));

//server logs
app.use(morgan('combined'));
// SERVING STATIC FILES
app.use(express.static(path.join(__dirname, 'styles')));

//setting where views go, what to view with
app.set('views', 'views');
app.set('view engine', 'pug');
