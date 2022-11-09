exports.seed = async function (knex) {
  await knex('movies').del()
  await knex('movies').insert([
    {
      id: 1,
      title: 'Star Wars: Return of the Jedi',
      director: 'George Lucas',
      genre: 'Sci-fi',
      rating: 10,
    },
    { id: 2, title: 'Ponpoko', director: 'Hayao', genre: 'Anime', rating: 10 },
    { id: 3, title: 'Star Trek', director: 'Matt', genre: 'Sci-fi', rating: 5 },
  ])
}
