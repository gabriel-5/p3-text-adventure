
class Room {

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }


    set name(value) {
        if (value === "") {
            console.log("Error, name too short");
        }
        this._name = value;
    }

    set description(value) {
        if (value === "") {
            console.log("Error, description too short");
        }
        this._description = value;
    }

    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._linkedRooms = {};
        this._linkedItems = {};
    }

    get linkedRooms() {
        return this._linkedRooms;
    }

    linkRoom(direction, room) {
        this._linkedRooms[direction] = room;
    }

    get linkedItems() {
        return this._linkedItems;
    }

    linkItem(desc, item) {
        this._linkedItems[desc] = item;
    }

    take(takeItem) {
<<<<<<< HEAD
        if (backpack.includes(takeItem)) {
            document.querySelector("#information").innerHTML = `You already have the ${takeItem}.`;
        } else if (takeItem in this._linkedItems) {
            console.log(`You take the ${takeItem}`);
            document.querySelector("#information").innerHTML = `You take the ${takeItem}. ${this._linkedItems[takeItem].description}`;
            let itemToTake = this._linkedItems[takeItem];
            this._linkedItems[takeItem] = null;
            return itemToTake;

=======
        if (takeItem in this._linkedItems) {
            console.log(`You take the ${takeItem}`);
            document.querySelector("#information").innerHTML = `You take the ${takeItem}. ${this._linkedItems[takeItem].description}`;
            return this._linkedItems[takeItem].description;
>>>>>>> 57e27f435b3fa8ad774cc208bf8a1c01a8f0b97d
        } else {
            console.log(`There isn't a ${takeItem} here.`);
            document.querySelector("#information").innerHTML = `There isn't a ${takeItem} here.`;
        }
    }


<<<<<<< HEAD


=======
>>>>>>> 57e27f435b3fa8ad774cc208bf8a1c01a8f0b97d
    move(direction) {
        if (direction in this._linkedRooms) {
            playAudio(stepsSound);
            document.querySelector("#information").innerHTML = ""
            return this._linkedRooms[direction];

        } else {
            document.querySelector("#information").innerHTML = "You can't go in that direction"
            return this;
        }
    }

    describe() {
        return `${this._description}.`;
    }

}

class Item {

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get isHeld() {
        return this._isHeld;
    }

    set name(value) {
        if (value === "") {
            console.log("Error, name too short");
        }
        this._name = value;
    }

    set description(value) {
        if (value === "") {
            console.log("Error, description too short");
        }
        this._description = value;
    }

    set isHeld(value) {
        this._isHeld = value;
    }

    constructor(name, description, isHeld) {
        this._name = name;
        this._description = description;
        this._isHeld = isHeld;
    }
}

class HeldItem extends Item {
    constructor(name, description, isHeld) {
        super(name, description);
        this.isHeld = isHeld
    }
}


class Character {

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get conversaion() {
        return this._conversation;
    }


    set name(value) {
        if (value === "") {
            console.log("Error, name too short");
        }
        this._name = value;
    }

    set description(value) {
        if (value === "") {
            console.log("Error, description too short");
        }
        this._description = value;
    }

    set conversaion(value) {
        if (value === "") {
            console.log("Error, conversation too short");
        }
        this._conversation = value;
    }

    talk() {
        return `${this._name} says: ${this._conversaion}`;
    }

    constructor(name, description, conversation) {
        this._name = name;
        this._description = description;
        this._conversaion = conversation;
    }
}

class Enemy extends Character {
    constructor(name, weakness) {
        super(name, "Enemy");
        this._weakness = weakness;
    }

    fight(item) {
        if (item == this._weakness) {
            return true;

        } else {
            return false;
        }
    }

    attack() {
        alert(`${this._name} attacks you!`)
    }
}

const Silas = new Character("Silas", "A small bronze statue of a dog, glued back together.", "Thank you for putting me back together. I've been like that for years. Ever since the last person arrived here.")
<<<<<<< HEAD
=======

>>>>>>> 57e27f435b3fa8ad774cc208bf8a1c01a8f0b97d


const Kitchen = new Room("kitchen", "You are in a kitchen. It is spotless and unbearably humid, like a greenhouse in summer. There is an unplugged fridge-freezer with a note on the front which reads 'Welcome to Skid Hollow. Please do not remove this note'. On the dining table, there is a small bottle of glue. To the north, there is a metal door. To the east, a set of swinging saloon doors. To the south, a red door with a circle carved into it. To the west, a tunnel you may be able to crawl through");
const Foundry = new Room("foundry", "The must be where all the heat was coming from. In what looks like a foundry of some sort, there are eight men all all melting down what looks like bronze in a home-made crucible. No matter what you try, they do not acknowledge you. The door to the south leads back to the kitchen");
const ProcessingPlant = new Room("processing plant", "You are in a room full of big tanks processing unidentifiable thick liquids. The place smells like a combination of shoe polish and strong cider. Some of the tanks have small cracks and the liquid is seeping out at a glacial pace. The leaking liquid looks like tree sap mixed with gram flour. The tunnel to the east leads back to the kitchen")
const Graveyard = new Room("graveyard", "You are in a a spacious, dimly-lit indoor graveyard. There's about three metres of space between each headstone. They all seem to be from wildly differing time periods. To the west is the door back into the kitchen")
const WorshippingArea = new Room("worshipping area", "The room is nearly completely empty aside from a concrete alter in the far end of the room. On top of the alter there are the remains of a  bronze statue of a dog smashed into pieces. The door to the north leads back to the kitchen")

<<<<<<< HEAD
const Note = new Item("Note", "It is a red piece of paper which reads 'Welcome to Skid Hollow. Please do not remove this note'");
const Glue = new Item("Glue", "It is a tube of strong glue", false);
=======
const Note = new Item("Note", "It is a red piece of paper which reads 'PLEASE PUT ME BACK TOGETHER'");
const Glue = new Item("Glue", "It is a tube of strong glue");
>>>>>>> 57e27f435b3fa8ad774cc208bf8a1c01a8f0b97d


Kitchen.linkRoom("north", Foundry);
Kitchen.linkRoom("south", WorshippingArea);
Kitchen.linkRoom("east", Graveyard);
Kitchen.linkRoom("west", ProcessingPlant);

Kitchen.linkItem("glue", Glue);
Kitchen.linkItem("note", Note);

Foundry.linkRoom("south", Kitchen);

ProcessingPlant.linkRoom("east", Kitchen);

Graveyard.linkRoom("west", Kitchen);

WorshippingArea.linkRoom("north", Kitchen);

let currentRoom = Kitchen;

let backpack = [];

window.onload = () => {
    document.getElementById("game").innerHTML = currentRoom.describe();

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            command = document.getElementById("command").value.toLowerCase();
            //direction commands
            const directions = ["north", "south", "east", "west"]
            const actions = ["note", "glue"]

<<<<<<< HEAD
            if (directions.includes(command) && currentRoom == Graveyard && backpack.includes(" Note ")) {
                playAudio(badEndSound);
=======
>>>>>>> 57e27f435b3fa8ad774cc208bf8a1c01a8f0b97d

                document.getElementById("game").innerHTML = "As you try to leave the graveyard, you begin to hear a harsh ringing in your ears. The ringing feels both internal and external, growing louder and more painful. You feel yourself being dragged away. You lose consciousness."
                document.getElementById("img-container").appendChild(badEnd);
                document.getElementById("command").style.display = "none";
                document.getElementById("inventory-title").style.display = "none";
                document.getElementById("inventory").style.display = "none";

            } else if (command == "dog" && currentRoom == WorshippingArea && backpack.includes(" Glue ")) {
                console.log("this is working");
            } else if (directions.includes(command)) {
                currentRoom = currentRoom.move(command);
                document.getElementById("game").innerHTML = currentRoom.describe();
<<<<<<< HEAD

            } else if (actions.includes(command)) {
                let item = currentRoom.take(command);
                backpack.push(" " + item.name + " ");
                inventoryText();
=======
                document.querySelector("#information").innerHTML = ""
            } else if (actions.includes(command)) {
                currentRoom.take(command);
>>>>>>> 57e27f435b3fa8ad774cc208bf8a1c01a8f0b97d
            } else {
                alert("invalid command");
            }
        }

    })

}

function playAudio(audio) {
    audio.play();
}

function inventoryText() {
    document.getElementById("inventory").innerHTML = ""
    for (i = 0; i < backpack.length; i++)
        document.getElementById("inventory").innerHTML += backpack[i];
}

let badEnd = document.createElement("img");

badEnd.classList.add("imageSpin");

badEnd.src = "images/gravestone.png";

let badEndSound = document.querySelector("#badEnd");
let stepsSound = document.querySelector("#steps");


// use linkedrooms to add items to rooms/inventory