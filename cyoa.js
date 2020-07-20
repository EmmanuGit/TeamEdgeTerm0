const READLINE = require("readline-sync");

const DELAY = 5000

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
        this.enemyhealth = this.enemy;

    }
}

class Player {
        constructor(name, items, health){
            this.name =name
            this.items = items
            this.health = health
        }
}

let player = new Player()
  player.name = null
  player.items = []
  player.health = 100




let Entrance = new Room();
   Entrance.name = "Entrance";
   Entrance.description = "Hurray you escaped."
    Entrance.paths = ["livingroom"]

    let Basement = new Room();
    Basement.name = "Basement"
    Basement.description = "The room I woke up in smelled like a very strong smell of iron. As I took off the cloth covering my eyes I noticed that the room is lit red. As my eyes adjust to the light I see a man laying down. I tug on him wondering where I am. He suddenly wakes up. I see a stab wound on his chest. I asked what happened to him. He replied: GET OUY NOW. SAVE YOURSELF BEFORE THEY COME BACK. HERE TAKE THIS KEY. YOU'LL NEED TWO MORE TO OPEN THE FRONT DOOR. BE CAREFUL.  "
    Basement.paths = ["Kitchen"]
    Basement.objects = ["Dagger" ,"Key1", "medkit"];

let Kitchen = new Room()
    Kitchen.name = "Kitchen"
    Kitchen.description = " The kitchen is nice and big. On a cutting board lays a pale hand with its ring finger cut off. "
    Kitchen.paths = ["Basement", "DinningHall", ""]
    Kitchen.objects = ["Apple"]


let SecurityRoom = new Room();
    SecurityRoom.name = "securityroom"
    SecurityRoom.description = " Its dark with only monitors showing camera footage."
    Kitchen.paths = ["storage", "Bedroom1", "Hallway1"]



    let bathroom = new Room()
   bathroom.name= "Bathroom"
   bathroom.description ="You are in a Bathroom. The sink is filled with blood. The tiolet is filled with some sort of black liquid."
   bathroom.objects = ["Key2"]
   bathroom.paths =["Hallway"]

   let Dinninghall = new Room();
   Dinninghall.name = "Dinninghall"
   Dinninghall. description = " The dinning hall is huge with a long table streching from one side to the other."
   Dinninghall.paths = [""]
   Dinninghall.objects = [] 
   Dinninghall.enemyhealth = 100
 
   let Storage = new Room()
   Storage.name = "Storageroom"
   Storage.description = "There storage room reeks of blood.It is filled with many boxes."
   Storage.paths = []
   Storage.objects = ["medkit", "key3"]

   let Bedroom_1 = new Room()
   Bedroom_1.name = "Bedroom1"
   Bedroom_1.description ="The bedroom is huge. It looks nice and elegant."
   Bedroom_1.paths = []
   Bedroom_1.objects = ["medkit"]
   Bedroom_1.enemyhealth = 100

   let Livingroom = new Room();
   Livingroom.name = "Livingroom"
   Livingroom.description = "The Livingroom is big with red walls and what looks to be expensive items shown in disply."
   Livingroom.paths = ["kitchen", "dinninghall", "bathroom", "bedroom"]
   Livingroom.objects = ["vase"]
   Livingroom.enemyhealth = 100

   let Hallway = new Room()
   Hallway.name = "Hallway"
   Hallway.description = "The hallway is not well lit"
   Hallway.paths = ["Securityroom", "Bathroom"]
   Hallway.objects = ["Key2"]



rooms.push(Entrance, Basement, Kitchen, SecurityRoom, Bedroom_1, Livingroom, Hallway)


   function start(){
    let name = READLINE.question(" What is your name?")
    console.log(`October 30th 1984: Bye honey Im going for a late night run.`)
    
    console.log("Ive always liked running in the night, its relaxing and very theraputic. As I run down the street I see people with long black robes with scary masks. I keep on running and don't think much of it because tomarrow is halloween. I keep on running until I get to the woods. As I run through the woods. I hear noises behind me. As I turn around to check what made that noise I got knocked out.  ")




    console.log(`
    ___     _       _               _____   _ ___ ___ _ _  
    / _ \ __| |_ ___| |__  ___ _ _  |__ / | / / _ ( _ ) | | 
   | (_) / _|  _/ _ \ '_ \/ -_) '_|  |_ \ | | \_, / _ \_  _|
    \___/\__|\__\___/_.__/\___|_|   |___/_| |_|/_/\___/ |_| 
                                                             `)




currentRoom = Basement    

    while(gameIsOn){
        checkAnswer(promptUser()) //this makes the game continously prompt and check response

    }
   }

function promptUser(){

   let  reply = READLINE.question("What do you want to do?  >>  ")

    return reply
}

function checkAnswer(input){

    console.log("checking input :  " +  input)

currentRoom = Basement

//GO
        if(input.includes("go")){

            //split the string into two arguments

            let inputArray  = input.split(" ")
            let newRoom = inputArray[1] //get the second element

             console.log(" user typed go to " + newRoom)

             if(currentRoom.paths.includes(newRoom)){

                console.log("Yes you can go there")
                
                

                //find the room that has that "key" newRoom as a property

                for (room of rooms){  //Make challenge!!!!

                    if(room.name.toLowerCase() == newRoom.toLowerCase()){

                        //set the current room by grabbing its index
                        let index = rooms.indexOf(room)

                        currentRoom = rooms[index]
                        console.log("You are in the  : " + currentRoom.name);
                        
                        
                       
                    }
                }

             } else {

                console.log("No you can't go there")
             }
 //LOOK          
        } else if(input.includes("look")){
            //loop through all the objects and paths and print them out so user can see options

            console.log(currentRoom.description) 
            console.log(" The objects in the room are:")

            for(object of currentRoom.objects){
        
                console.log(" -  " + object)
            }

            console.log("From here you can go to: ")

            for(path of currentRoom.paths){
                console.log(" - " + path)

            }


        
            

        } else if (input.includes("use")){
            let itemsArray = input.split(" ")
            if(itemsArray[1] == "medkit"){
               health = player.health + 50
               console.log(health) 

            }

        }
     
        
        else if(input.includes("take")){

            console.log("Taking item...")

            let itemsArray  = input.split(" ")
            let itemToTake = itemsArray[1] //get the second element

            //check to see if it is part of the room's inventory..

            if(currentRoom.objects.includes(itemToTake)){

                console.log("Yes you can take this item: " + itemToTake)
                player.items.push(itemToTake) //add to the players items array

                //remove from room
                let indexToRemove = currentRoom.objects.indexOf(itemToTake)

                currentRoom.objects.splice(indexToRemove, 1)

                //console.log("current room items after taking item " + currentRoom.objects)
                console.log("player has : " + player.items)

            } else {
                console.log("No you can't pick that up")

            }
//Name
        } else  if (input.includes("name")){
    
            console.log(currentRoom.name);

        }  else if (input.includes("help")){
    
            console.log(" You can type 'look' to look around and 'go' to follow a path `take` to take objects `use` to use healing items, `invenotry` to check your inventory.")
            
        } else if (input == ""){

            console.log(" input: " + input)
             
            input = READLINE.question("What do you want to do? You can type 'help' for commands to use >>> ");

        }
            

            



        else if (input.includes("inventory")){
            console.log(`Your Inventory: ${player.items}`)
        }
        
        else if (input.includes("health")){
            console.log(`Your health: ${player.health}`)
        }


          else {

            console.log(" I don't understand that")
        }
        
    
}

        








 


start()