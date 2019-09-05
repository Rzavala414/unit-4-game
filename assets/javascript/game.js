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

console.log("Blue Gem:  " + valueOfBlueGem);
console.log("Green Gem: " + valueOfGreenGem);
console.log("Red Gem:   " + valueOfRedGem);
console.log("Yellow Gem: " + valueOfYellowGem);

//Collects USER input when CRYSTAL is clicked
//prints player's total score to screen and have the number update when clicked
$("#valueOfBlueCrystal").on("click", function() {
  userScore = userScore + valueOfBlueGem;
  $("#playersTotalScore").text(userScore);
  console.log(userScore);
});
$("#valueOfGreenCrystal").on("click", function() {
  userScore = userScore + valueOfGreenGem;
  $("#playersTotalScore").text(userScore);
  console.log(userScore);
});
$("#valueOfRedCrystal").on("click", function() {
  userScore = userScore + valueOfRedGem;
  $("#playersTotalScore").text(userScore);
  console.log(userScore);
});
$("#valueOfYellowCrystal").on("click", function() {
  userScore = userScore + valueOfYellowGem;
  $("#playersTotalScore").text(userScore);
  console.log(userScore);
});
var wins = 0;
var losses = 0;

//TODO:HAVE THE WINS GO UP IF NUMBER MATCHES
if (playerGoal === userScore) {
  wins++;
  $("#winsText").text("wins:" + wins);
  reset();
  //TODO:HAVE LOSES GO UP WHEN PLAYER GOES OVER GIVEN VALUE
} else if (playerGoal < userScore) {
  losses++;
  $("#lossesText").text("losses:" + losses);
  reset();
}
//TODO:HAVE THE GAME RESET WITH DIFFERENT VALUES FOR THE GEMS
function reset(){
  userScore = 0;
  var valueOfBlueGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  var valueOfGreenGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  var valueOfRedGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  var valueOfYellowGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);

}
