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
backdrop.src = "media/sprites/other/background1_0-7.png";
backdrop.id = "background_image";

//create healthbar
let healthbar = document.createElement("img");
healthbar.src = "media/sprites/other/healthbar_0-7.png";
healthbar.id = "healthbar"

let phase = 0; //phase variable
let health = 0;

let sfx_punch1 = new Audio("media/audio/sail1.mp3");
let sfx_punch2 = new Audio("media/audio/sail2.mp3");
let sfx_punch3 = new Audio("media/audio/sail3.mp3");
let sfx_punch4 = new Audio("media/audio/sail3-2.mp3");

let sfx_woof1 = new Audio("media/audio/woo1.mp3");
let sfx_woof2 = new Audio("media/audio/woo2.mp3");

let sfx_line1 = new Audio("media/audio/talk1.mp3");
let sfx_line2 = new Audio("media/audio/talk2.mp3");
let sfx_line3 = new Audio("media/audio/talk3.mp3");
let sfx_line4 = new Audio("media/audio/talk4.mp3");
let sfx_line5 = new Audio("media/audio/talk5.mp3");
let sfx_line6 = new Audio("media/audio/talk6.mp3");
let sfx_line7 = new Audio("media/audio/talk7.mp3");


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
    backdrop.src = "media/sprites/other/background1_0-7.png";
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 32) {
            if (phase === 1) {
                punch();
            } else if (phase === 2) {
                talk();
            } else if (phase === 3) {

            }
        }
    })
    document.addEventListener("keyup", function (event) {
        if (event.keyCode == 32) {
            if (phase === 1) {
                unpunch();
            } else if (phase === 2) {
                untalk();
            } else if (phase === 3) {

            }
        }
    })
}

function punch() {
    console.log("punch!");
    if (health != 7) {
        ana.src = "media/sprites/ana/punch-ana-2.png";
        wolf.src = wolf.src = "media/sprites/wolf/A-2.png";
        if (health === 0) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_1-7.png";
            backdrop.src = "media/sprites/other/background1_1-7.png";
            health = 1;
        } else if (health === 1) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_2-7.png";
            backdrop.src = "media/sprites/other/background1_2-7.png";
            health = 2;
        } else if (health === 2) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_3-7.png";
            backdrop.src = "media/sprites/other/background1_3-7.png";
            health = 3;
        } else if (health === 3) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_4-7.png";
            backdrop.src = "media/sprites/other/background1_4-7.png";
            health = 4;
        } else if (health === 4) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_5-7.png";
            backdrop.src = "media/sprites/other/background1_5-7.png";
            health = 5;
        } else if (health === 5) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_6-7.png";
            backdrop.src = "media/sprites/other/background1_6-7.png";
            health = 6;
        } else if (health === 6) {
            pickSFX();
            backdrop.src = "media/sprites/other/background1_7-7.png";
            wolf.src = "";
            ana.src = "";
            healthbar.style.zIndex = -2;
            health = 7;
        }
    }
    else if (health === 7) {

        partTwo();
    }
}
function pickSFX() {
    if (phase === 1) {
        let random = Math.floor((Math.random() * 2));
        if (random === 0) {
            sfx_punch1.play();
        } else if (random === 1) {
            sfx_punch2.play();
        } else if (random === 2) {
            sfx_punch3.play();
        } else {
            sfx_punch4.play();
        }
    } else if (phase === 2) {
        if (health === 7) {
            sfx_line1.play();
        } else if (health === 6) {
            sfx_line2.play();
        } else if (health === 5) {
            sfx_line3.play();
        } else if (health === 4) {
            sfx_line4.play();
        } else if (health === 3) {
            sfx_line5.play();
        } else if (health === 2) {
            sfx_line6.play();
        } else if (health === 1) {
            sfx_line7.play();
        } 
    }
}
function unpunch() {
    console.log("unpunch!");
    if (health === 7) {
        wolf.src = "";
        ana.src = "";
        healthbar.style.zIndex = -2;
    } else {
        wolf.src = wolf.src = "media/sprites/wolf/A-1.png";
        ana.src = "media/sprites/ana/ana-2.png";
        let random = Math.random();
        if (random < 0.2) {
            sfx_woof2.play();
        } else {
            sfx_woof1.play();
        }
    }

}
function partTwo() {
    backdrop.src = "";
    contentBox.style.backgroundColor = "black";
    contentBox.zIndex = 3;
    phase = 2;
    health = 7;
    wolf.src = wolf.src = "media/sprites/wolf/B-1.png";
    ana.src = "media/sprites/ana/ana-1.png";
    backdrop.src = "media/sprites/other/background2.png";
    healthbar.src = "media/sprites/other/healthbar_7-7.png";
    healthbar.style.zIndex = 1;
    contentBox.zIndex = -2;
}

function talk() {
    if (health != 0) {
        ana.src = "media/sprites/ana/talk-ana-1.png";
        wolf.src = wolf.src = "media/sprites/wolf/B-2.png";
        if (health === 7) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_6-7.png";
            health = 6;
        } else if (health === 6) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_5-7.png";
            health = 5;
        } else if (health === 5) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_4-7.png";
            health = 4;
        } else if (health === 4) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_3-7.png";
            health = 3;
        } else if (health === 3) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_2-7.png";
            health = 2;
        } else if (health === 2) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_1-7.png";
            health = 1;
        } else if (health === 1) {
            pickSFX();
            healthbar.src = "media/sprites/other/healthbar_0-7.png";
            health = 0;
        }
    }
}
function untalk() {
    if (health != 0) {
        wolf.src = wolf.src = "media/sprites/wolf/B-1.png";
        ana.src = "media/sprites/ana/ana-1.png";
    } else {
        wolf.src = wolf.src = "media/sprites/wolf/B-1.png";
        ana.src = "media/sprites/ana/ana-1.png";
    }
}

function partThree() {

}