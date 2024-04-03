const buttonGrid = document.getElementsByClassName("button");
let currentPlayer = "p1";

for (let i = 0; i < buttonGrid.length; i++) {
    const button = buttonGrid[i];
    button.addEventListener("click", () => addSymbol(button));
}

function addSymbol(b){

    const img = document.createElement("img");

    if(currentPlayer == "p1"){
        img.src = "x.png";
        img.className = "x";
        currentPlayer = "p2";
    }
    else{
        img.src = "o.png";
        img.className = "o";
        currentPlayer = "p1";
    }

    b.appendChild(img);
    b.style.opacity = 100;
    b.style.border = "none";
    b.style.backgroundColor = "transparent";
    b.disabled = true;
}
