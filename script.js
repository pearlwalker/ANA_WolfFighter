function buttonClick() {
    console.log("button clicked!");
    startGame();
}

function startGame() {
    //remove start button so user can't 2x click
    let startButton = document.getElementById("startButton");
    startButton.remove();

    //background change to show game start
    let contentBox = document.getElementById("contentbox");
    contentBox.style.backgroundColor = "white";

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
    healthbar.src = "media/sprites/other/healthbar_7-7.png";
    healthbar.id = "healthbar"
    //add to contentBox
    contentBox.appendChild(ana);
    contentBox.appendChild(wolf);
    contentBox.appendChild(backdrop);
    contentBox.appendChild(healthbar);
}