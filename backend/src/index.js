const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan'); //middleware that logs your requests
const cors = require('cors'); //middleware
const mongoose = require('mongoose');

const router = require('./router');

dotenv.config();

const app = express();
app.use(express.json()); //middleware to process json request
app.use(cors()); //preventing API hittting not the same domains
app.use(morgan('tiny')); //debugging

app.use(router);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('starting on port 8080');
  app.listen(8080);
});
