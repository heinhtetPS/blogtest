require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

//make the app
const app = express();

app.get('/', (req, res) => res.end('hello world'));
app.listen(3000, () => console.log('i am listening on port 3000'));

//server logs
app.use(morgan('combined'));
