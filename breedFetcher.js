const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');


const fetchBreedDescription = function(breedName, callback) {
    const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
    request(url, (error, response, body) => {
      
      if (error) {
        prompt = error;
      } else if (response && response.statusCode !== 200) {
        prompt = response.statusCode;
      } else {
        const data = JSON.parse(body);
        if (data.length === 0 ) {
          prompt = 'The breed queried is not found!';
        } else {
          description = data[0].description;
        }
      }
      
      callback(prompt, data);
    });
  };
  
  module.exports = { fetchBreedDescription };