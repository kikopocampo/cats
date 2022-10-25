const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {

  it('provides, via callback, breed details for the Bombay breed', (done) => {
    breedDetailsFromFile('bombay', (desc) => {
    const expected = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    assert.equal(expected, desc);
    done();
    });  
  });
  
  it('provides, via callback, breed details for the Balinese breed', (done) => {
    breedDetailsFromFile('balinese', (desc) => {
    const expected = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
    assert.equal(expected, desc);
    done();
    });  
  });

  it('provides, via callback, undefined for breeds that are not in the file', (done) => {
    breedDetailsFromFile('siamese', (desc) => {
    const expected = undefined;
    assert.equal(expected, desc);
    done();
    });  
  });
  
})