class Form{
    constructor(){

    }
    displayForm(){
    var title = createElement('h2')
    title.html("Car race game")
    var button = createButton("button")
    var input = createInput("Please enter Username")
    title.position(200,200)
    button.position(100,200)
    input.position(150,200)
    }
}