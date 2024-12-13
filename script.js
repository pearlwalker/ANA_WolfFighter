function buttonClick() {
    console.log("button clicked!");
    startGame();
}

function startGame() {
    let startButton = document.getElementById("startButton");
    startButton.remove();
    let contentBox = document.getElementById("contentbox");
    contentBox.style.backgroundColor = "white";
    let anaImage = document.createElement("img");
    anaImage.src = "media/ana/ana-0.png";
    anaImage.id = "ana_image";
    anaImage.width = 100;
    contentBox.appendChild(anaImage);
}