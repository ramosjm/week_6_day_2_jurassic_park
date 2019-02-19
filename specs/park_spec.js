const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Gretna',3.50,[])

  })

  it('should have a name',function(){
    const actual = park.name;
    assert.strictEqual(actual,'Gretna');
  });

  it('should have a ticket price',function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual,3.50);
  });

  it('should have a collection of dinosaurs',function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[]);
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
