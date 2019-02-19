const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let bigPark;
  let dinosaurGroup;

  beforeEach(function () {
    park = new Park('Gretna',3.50,[]);
    dinosaur = new Dinosaur('Orc','Grass',20);
    dinosaur1 = new Dinosaur('Elf','Grass',10);
    dinosaur2 = new Dinosaur('Elf','Meat',10);
    dinosaur3 = new Dinosaur('Elf','Meat',20);
    dinosaur4 = new Dinosaur('Goblin','Everything',30);
    dinosaurGroup = [dinosaur,dinosaur1,dinosaur2,dinosaur3,dinosaur4];
    bigPark = new Park ('Collossus',10,dinosaurGroup);
  });

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

  it('should be able to add a dinosaur to its collection',function(){
    park.dinosaurs.push(dinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual,1);
  });

  it('should be able to remove a dinosaur from its collection',function(){
    park.dinosaurs.push(dinosaur);
    park.dinosaurs.push(dinosaur1);
    park.dinosaurs.push(dinosaur2);
    park.dinosaurs.pop();
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual,2);
  });

  it('should be able to find the dinosaur that attracts the most visitors',function(){
    const actual = bigPark.mostVisitors();
    const expected = dinosaur4;
    assert.strictEqual(actual,expected);
  });

  xit('should be able to find all dinosaurs of a particular species',function(){
    const actual = bigPark.findSpecies('Elf');
    const expected =[dinosaur1,dinosaur2,dinosaur3];
    assert.deepStrictEqual(actual,expected);
  });

  xit('should be able to remove all dinosaurs of a particular species');

});
