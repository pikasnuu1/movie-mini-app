const express = require('express');
const app = express();
const port = 3001;

const knex = require('knex')(require('../knexfile.js')["development"])

app.get('/', (req ,res) => {
  res.send('you are home');
});

app.get('/movies', (req, res) => {
  knex('movie_titles')
    .select('*')
    .then(movies => {
      var movieTitles = movies.map(movie => movie)
      res.json(movieTitles);
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})