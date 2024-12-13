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
    let anaImage = document.createElement("img");
    anaImage.src = "media/sprites/ana/ana-2.png";
    anaImage.id = "ana_image";

    //create wolf image element
    let wolfImage = document.createElement("img");
    wolfImage.src = "media/sprites/wolf/A-1.png";
    wolfImage.id = "wolf_image";

    //create background
    let backdrop = document.createElement("img");
    backdrop.src = "media/sprites/other/background1.png";
    backdrop.id = "background_image";

    //add to contentBox
    contentBox.appendChild(anaImage);
    contentBox.appendChild(wolfImage);
    contentBox.appendChild(backdrop);
}