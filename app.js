require('dotenv').config();

//Main framework
const express = require('express');
//middleware for logging
const morgan = require('morgan');
//simplify directory paths (not sure how)
const path = require('path');
//file reader/writer
const fs = require('fs');
//id generator
const uuid = require('uuid/v1');
//to parse html forms
const bodyParser = require('body-parser');
//for overriding http method, so we can do put and delete in html forms
const methodOverride = require('method-override');

//make the app
const app = express();

//getting db
const blogFile = fs.readFileSync('./seeds/blogs.json', 'utf-8');
const blogArray = JSON.parse(blogFile);

//old test render
// app.get('/', (req, res) =>
//   res.render('hello'));

//render index
app.get('/', (req, res) =>
  res.render('index', {
    blogs: blogArray
  })
);

// when I put this in, all the css for index disappears. Why?
// app.get('/:info', (req, res) => {
//     // we have access to the params in our request object
//     res.end(req.params.info)
//     }
// );

//server log
app.listen(3000, () => console.log('i am listening on port 3000'));

//server logs
app.use(morgan('combined'));
// SERVING STATIC FILES
app.use(express.static(path.join(__dirname, 'styles')));
// put & delete for HTML forms
app.use(methodOverride('_method'));

//setting where views go, what to view with
app.set('views', 'views');
app.set('view engine', 'pug');
