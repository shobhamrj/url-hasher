const serverless = require("serverless-http");
const express = require("express");
const crypto = require('crypto');
const mongoose = require('mongoose');
const URL = require('./models/URL')

const app = express();
const DB_URI = ''
app.use(express.json());

mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(e => console.log('Error connecting to MongoDB:', e))


app.post('/api/hash-url', (req, res) => {
  const longURL = req.body.url;

  if(!longURL) {
    return res.status(400).send('URL Required!')
  }
  const hashedURL = crypto.createHash('sha256').update(longURL).digest('base64url').toString();

  const newURL = new URL({
    longURL,
    hashedURL
  })
  newURL.save()
      .then(() => {
        return res.status(200).json({ hashedURL })
      })
      .catch((e) => {
        console.error('Error hashing long URl: ', e)
        return res.status(500).send('An error occurred while saving it database')
      })
});

app.get('/api/hash-url/:id', (req, res) => {
  const hashedURL = req.params.id;
  if(!hashedURL) {
    return res.status(400).send('Bad Request')
  }
  URL.findOne({hashedURL})
      .then((url) => {
        if(url) {
          url.counter += 1
          url.save()
              .then(() => {
                return res.redirect(url.longURL);
              })
              .error(e => res.status(500))
        }
        return res.status(400).send('Bad Request')
      })
      .catch(e => {
        return res.status(500)
      })
})

// app.use((req, res, next) => {
//   return res.status(404).json({
//     error: "Not Found",
//   });
// });

module.exports.handler = serverless(app);
