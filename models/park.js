const Park = function (name, ticketPrice, dinosaurs = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};


Park.prototype.mostVisitors = function(){
  this.dinosaurs.sort(function(a, b){return b.guestsAttractedPerDay - a.guestsAttractedPerDay});
  return this.dinosaurs[0];
};

Park.prototype.findSpecies = function(species){
  result = this.dinosaurs.species.filter(species);
  console.log(result);
  return result;
};

module.exports = Park;
