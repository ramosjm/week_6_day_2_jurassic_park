const Park = function (name, ticketPrice, dinosaurs = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};



Park.prototype.mostVisitors = function(){
  this.dinosaurs.sort(function(a, b){return b.guestsAttractedPerDay - a.guestsAttractedPerDay});
  return this.dinosaurs[0];
};

// Park.prototype.findSpecies = function(species){
//   function typeOfSpecies(species) {
//     if(this.dinosaurs.species === species){
//       return true;
//     }
//   }
//   result = this.dinosaurs.filter(typeOfSpecies);
//   console.log(result);
//   return result;
// };
//
module.exports = Park;
