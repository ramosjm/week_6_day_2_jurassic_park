const Park = function (name, ticketPrice, dinosaurs = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  const remove = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.pop(remove);
};

Park.prototype.mostVisitors = function(){
  this.dinosaurs.sort(function(a, b){return b.guestsAttractedPerDay - a.guestsAttractedPerDay});
  return this.dinosaurs[0];
};

Park.prototype.findSpecies = function(species){
  const result = this.dinosaurs.filter(dino=>dino.species === species);
  return result;
};

module.exports = Park;
