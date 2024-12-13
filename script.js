let contentBox = document.getElementById("contentbox");

//create ANA image element
let ana = document.createElement("img");
ana.src = "media/sprites/ana/ana-2.png";
ana.id = "ana";

//create wolf image element
let wolf = document.createElement("img");
wolf.src = "media/sprites/wolf/A-1.png";
wolf.id = "wolf";

//create background
let backdrop = document.createElement("img");
backdrop.src = "media/sprites/other/background1.png";
backdrop.id = "background_image";

//create healthbar
let healthbar = document.createElement("img");
healthbar.src = "media/sprites/other/healthbar_1-7.png";
healthbar.id = "healthbar"

let phase = 0; //phase variable
let health = 1;
function buttonClick() {
    console.log("button clicked!");
    startGame();
}

function startGame() {
    //remove start button so user can't 2x click
    let startButton = document.getElementById("startButton");
    startButton.remove();

    //background change to show game start

    contentBox.style.backgroundColor = "white";

    //add to contentBox
    contentBox.appendChild(ana);
    contentBox.appendChild(wolf);
    contentBox.appendChild(backdrop);
    contentBox.appendChild(healthbar);

    //start phase1 of game
    partOne();
}

function partOne() {
    phase = 1;
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 32) {
            if (phase === 1) {
                punch();
            }
        }
    })
    document.addEventListener("keyup", function (event) {
        if (event.keyCode == 32) {
            if (phase === 1) {
                unpunch();
            }
        }
    })
}

function punch() {
    console.log("punch!");
    ana.src = "media/sprites/ana/punch-ana-2.png";
    wolf.src = wolf.src = "media/sprites/wolf/A-2.png";
    if (health === 1) {
        healthbar.src = "media/sprites/other/healthbar_2-7.png";
        health = 2;
    } else if (health === 2) {
        healthbar.src = "media/sprites/other/healthbar_3-7.png";
        health = 3;
    } else if (health === 3) {
        healthbar.src = "media/sprites/other/healthbar_4-7.png";
        health = 4;
    } else if (health === 4) {
        healthbar.src = "media/sprites/other/healthbar_5-7.png";
        health = 5;
    } else if (health === 5) {
        healthbar.src = "media/sprites/other/healthbar_6-7.png";
        health = 6;
    } else if (health === 6) {
        healthbar.src = "media/sprites/other/healthbar_7-7.png";
        health = 7;
    } else if (health === 7) {
        partTwo();
    }
}

function unpunch() {
    console.log("unpunch!");
    wolf.src = wolf.src = "media/sprites/wolf/A-1.png";
    ana.src = "media/sprites/ana/ana-2.png";

}
function partTwo() {
    phase = 2;
    health = 0;
    wolf.src = wolf.src = "media/sprites/wolf/B-1.png";
    ana.src = "media/sprites/ana/ana-2.png";
} 