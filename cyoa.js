const READLINE = require("readline-sync");

let inputMsg ="" //an empty string to hold our user inputs
let gameIsOn = true //the game loop will depend on this being true
let currentRoom = null //to keep track of where we are
let rooms = [] //push any new rooms you create to this array

class Room{
    constructor(name, description, objects, paths) {
        this.name = name;
        this.description = description;
        this.objects = objects;
        this.paths = paths;
    }
}

class Player {
        constructor(name, items){
            this.name =name
            this.items = items
        }
}






let Entrance = new Room();
   Entrance.name = "Entrance";
   Entrance.description = "The mansion looks.";
    Entrance.paths = "Living Room";

    let Basement = new Room();
    Basement.name = "Basement"
    Basement.description = "The room I woke up in smelled like a very strong smell of iron. As I took off the cloth covering my eyes I noticed that the room is lit red."
    Basement.paths = ""
    Basement.object = ["Dagger"];

let Kitchen = new Room()
    Kitchen.name = "Kitchen"
    Kitchen.description = ""
    Kitchen.paths = 
    Kitchen.objects = 


let SecurityRoom = new Room();
    SecurityRoom.name = "securityroom"





   function start(){
    let name = READLINE.question(" What is your name?")
    console.log(`October 30th 1984: Bye honey Im going for a late night run.`)
    console.log("Ive always liked running in the night, its relaxing and very theraputic. As I run down the street I see a white pale man with black eyes starring at me. I next see an old lady with sharp pointy teeth. I keep on running and don't think much of it because tomarrow is halloween. I keep on running until I get to the    ")


 
   }

start()