const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error,response, body) => {
    try {
      callback(null, JSON.parse(body)[0].description);
    } catch (error) {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };