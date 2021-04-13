class Game{
    constructor(){

    }
    getGamestate(){
    var ourgameStateref=mydataBase.ref("gamestate");
    console.log("ourgamestateref" + ourgameStateref);

    ourgameStateref.on("value", function(data){

         ourgameState=data.val()
        //value of gameState
        console.log("value " + data.val())
    })
    }
    updateGamestate(){

    }
    startGame(){
    form = new Form();
    form.displayForm()
    }
    playGame(){

    }
    endGame(){
        
    }
}