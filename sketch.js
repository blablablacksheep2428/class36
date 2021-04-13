var ourgameState 
var playerCount 
var myGame
var mydataBase
var form

function setup(){
myGame = new Game()
mydataBase= firebase.database()
console.log("u there mate?")
myGame.getGamestate()
console.log("ourgamestate ="+ ourgameState)
myGame.startGame()
}
function draw(){
  background("red")
  console.log("ourgamestate ="+ ourgameState)
}
