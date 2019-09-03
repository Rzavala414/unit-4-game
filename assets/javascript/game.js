//CREATES A RANDOM NUMBER THAT THE PLAYER WILL TRY TO ADD UP TO
var playerGoal = Math.floor(Math.random() * (120 - 19 + 1) + 19);

//DISPLAYS THE PLAYER'S OBJECTIVE TO THE SCREEN
$("#playerGoal").text(playerGoal);

//CREATE A RANDOM NUMBER FOR EACH GEM
//creates a random number between 1-12 for the gems
var valueOfBlueGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var valueOfRedGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var valueOfGreenGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var valueOfYellowGem = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var userScore = 0;
//Collect USER input when CRYSTAL is clicked
$("#valueOfBlueCrystal").on("click", function() {
  //   alert("hey i work!!!");
  //   userScore = valueOfBlueGem;
  userScore = userScore + valueOfBlueGem;
  console.log(userScore);
});
$("#valueOfRedCrystal").on("click", function() {
  alert("hey i work!!!");
});
$("#valueOfGreenCrystal").on("click", function() {
  alert("hey i work!!!");
});
$("#valueOfYellowCrystal").on("click", function() {
  alert("hey i work!!!");
});
//TODO:HAVE THE NUMBER THE USER CLICKED ON ADD TO THE TOTAL SCORE BOX
//TODO:HAVE THE WINS GO UP IF NUMBER MATCHES
//TODO:HAVE LOSES GO UP WHEN PLAYER GOES OVER GIVEN VALUE
//TODO:HAVE THE GAME RESET WITH DIFFERENT VALUES FOR THE GEMS
