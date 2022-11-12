exports.seed = async function (knex) {
  await knex('movies').del()
  await knex('movies').insert([
    {
      id: 1,
      title: 'Star Wars:The Phantom Menace',
      director: 'George Lucas',
      genre: 'Sci-fi',
      rating: 10,
    },
    {
      id: 2,
      title: 'Ponpoko',
      director: 'Hayao Miyazaki',
      genre: 'Anime',
      rating: 10,
    },
    {
      id: 3,
      title: 'Welcome Back, Mr. McDonald',
      director: 'Koki Mitani',
      genre: 'Comedy',
      rating: 10,
    },
  ])
}
