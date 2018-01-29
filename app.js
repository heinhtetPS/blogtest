require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//make the app
const app = express();

app.get('/', (req, res) => {res.render('hello')});
app.listen(3000, () => console.log('i am listening on port 3000'));

//server logs
app.use(morgan('combined'));
// SERVING STATIC FILES
app.use(express.static(path.join(__dirname, 'styles')));


app.set('views', 'views');
app.set('view engine', 'pug');
