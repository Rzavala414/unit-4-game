//CREATES A RANDOM NUMBER THAT THE PLAYER WILL TRY TO ADD UP TO
var playerGoal = Math.floor(Math.random() * (120 - 19 + 1) + 19);

//DISPLAYS THE PLAYER'S OBJECTIVE TO THE SCREEN
$("#playerGoal").text(playerGoal);

//CREATE A RANDOM NUMBER FOR EACH GEM
//creates a random number between 1-12 for the gems
var valueOfBlueGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var valueOfGreenGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var valueOfRedGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var valueOfYellowGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var userScore = 0;

console.log("Blue Gem: " + valueOfBlueGem);
console.log("Green Gem: " + valueOfGreenGem);
console.log("Red Gem: " + valueOfRedGem);
console.log("Yellow Gem: " + valueOfYellowGem);

//Collects USER input when CRYSTAL is clicked
//HAVE THE NUMBER THE USER CLICKED ON ADD TO THE TOTAL SCORE BOX
$("#valueOfBlueCrystal").on("click", function() {
  userScore = userScore + valueOfBlueGem;
  console.log(userScore);
});
$("#valueOfGreenCrystal").on("click", function() {
  userScore = userScore + valueOfGreenGem;
  console.log(userScore);
});
$("#valueOfRedCrystal").on("click", function() {
  userScore = userScore + valueOfRedGem;
  console.log(userScore);
});
$("#valueOfYellowCrystal").on("click", function() {
  userScore = userScore + valueOfYellowGem;
  console.log(userScore);
});
//TODO:HAVE THE WINS GO UP IF NUMBER MATCHES
//TODO:HAVE LOSES GO UP WHEN PLAYER GOES OVER GIVEN VALUE
//TODO:HAVE THE GAME RESET WITH DIFFERENT VALUES FOR THE GEMS
