exports.seed = async function (knex) {
  await knex('reccomendations').del()
  await knex('reccomendations').insert([
    {
      id: 1,
      title: 'Sprite away',
      director: 'Hayao Miyazaki',
      genre: 'Anime',
      origin: 'Japan',
      summary: 'TBC',
      img: 'TBC',
    },
    {
      id: 2,
      title: 'New World',
      director: 'Park Hoon-jung',
      genre: 'Crime',
      origin: 'Korea',
      summary: 'TBC',
      img: 'TBC',
    },
    {
      id: 3,
      title: 'Chef',
      director: 'Jon Favreau',
      genre: 'Drama',
      origin: 'American',
      summary: 'TBC',
      img: 'TBC',
    },
  ])
}
