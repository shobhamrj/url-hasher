const serverless = require('serverless-http');
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
require('dotenv').config()

const app = express();
app.use(express.json());
const DB_URI = process.env.MONGO_URI
const swaggerDocument = YAML.load('./swagger.yaml')

mongoose.connect(DB_URI, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(e => console.log('Error connecting to MongoDB:', e))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/', require('./routes/urlRoutes'))

module.exports = app;
module.exports.handler = serverless(app);