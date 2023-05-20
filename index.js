const serverless = require('serverless-http');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
app.use(express.json());
const DB_URI = process.env.MONGO_URI

mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(e => console.log('Error connecting to MongoDB:', e))

app.use('/', require('./routes/urlRoutes'))

module.exports = app;
module.exports.handler = serverless(app);