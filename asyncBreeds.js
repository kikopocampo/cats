// asyncBreeds.js
const fs = require('fs');
// console.log(`1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1`);

const breedDetailsFromFile = function(breed, functionToRun) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRun(data);
    if (error) functionToRun(undefined);
    // if you can't read anything, nothing happens.
  });
};
const runData = data => console.log('Return Value: ', data); // display funct.
// console.log(`2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2`);
// breedDetailsFromFile('Bombay', runData);
// console.log(`3XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3`);

module.exports = breedDetailsFromFile
