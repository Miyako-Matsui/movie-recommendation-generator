import request from 'superagent'
const movieUrl = '/api/v1/movies'
const recUrl = '/api/v1/recs'

export function getMovies() {
  return request.get(movieUrl).then((res) => {
    return res.body
  }) //res.json route movies.js
}
export function getRecommendations() {
  return request.get(recUrl).then((res) => {
    return res.body
  }) //res.json route movies.js
}

export function saveMovie(newMovie) {
  return request
    .post(movieUrl)
    .send(newMovie) //insomia の左側
    .then((resp) => resp.body)
}
