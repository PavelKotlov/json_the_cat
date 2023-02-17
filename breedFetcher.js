const request = require('request');
const userInput = process.argv.slice(2,3)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  try {
    console.log(JSON.parse(body)[0].description);
  } catch (error) {
    console.log("Breed not found");
  }
});