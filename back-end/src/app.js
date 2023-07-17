const express = require('express');
const app = express();
const port = 3001;

const knex = require('knex')(require('../knexfile.js')["development"])
app.use(express.json());

app.get('/', (req ,res) => {
  res.send('you are home');
});

app.get('/movies', (req, res) => {
  knex('movie_titles')
    .select('*')
    .then(movies => {
      var movieTitles = movies;
      res.json(movieTitles);
    })
})

app.post('/movies', async (req, res) => {
  let moviesToAdd = req.body;

  try {
    const titlesToAdd = await knex('movie_titles')
    .insert(moviesToAdd)

    res.status(201).json(titlesToAdd)
  } catch (err) {
    res.status(500).json({message: "Error creating new post", error: err})
  }

});

app.patch('/movies/:id', async (req, res) => {
  let { id } = req.params;
  let { title }= req.body;
  //console.log(id) -> number from /:id
  //console.log(title); -> logs title once we hit 'patch' on postman
  try {
    const titlesToPatch = await knex('movie_titles')
    .where({ id: id })
    .update({
      title: title
    }, ['id', 'title'])
    res.status(201).json(titlesToPatch)
  } catch (err) {
    res.status(500).json({message: "Error creating patch request", error: err})
  };

})

app.put('/movies/:id', async (req, res) => {
  let { id } = req.params;
  let { title }= req.body;

  try {
    const titlesToPut = await knex('movie_titles')
    .where({ id: id })
    .update({
      title: title
    },['id', 'title'])
    res.status(201).json(titlesToPut)
  } catch (err) {
    res.status(500).json({message: "Error creating put request", error: err})
  };
})

app.delete('/movies/:id', async (req, res) => {
  let { id } = req.params;

  try {
    const movieToDelete = await knex('movie_titles')
    .where({ id: id })
    .del()
    res.status(201).json(movieToDelete)
  } catch (err) {
    res.status(500).json({message: "Error creating delete request", error: err})
  };
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})