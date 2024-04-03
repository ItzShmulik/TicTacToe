const buttonGrid = document.getElementsByClassName("button");
let grid = [];

// Create 2d array for x's and o's
for (let i = 0; i < 3; i++) {
    grid[i] = [];
    for (let j = 0; j < 3; j++) {
        grid[i][j] = [];
    }
}

let currentPlayer = "p1";

// Assigning oclick events for grid buttons
for (let i = 0; i < buttonGrid.length; i++) {
    const button = buttonGrid[i];
    button.addEventListener("click", () => addSymbol(button, i), checkRow(i));
}

// Function for adding x or o to the board
function addSymbol(b, index){

    const img = document.createElement("img");

    if(currentPlayer == "p1"){
        img.src = "x.png";
        img.className = "x";
        grid[index][j] = 'x';
        currentPlayer = "p2";
    }
    else{
        img.src = "o.png";
        img.className = "o";
        grid[index][j] = 'o';
        currentPlayer = "p1";
    }

    b.appendChild(img);
    b.style.opacity = 100;
    b.style.border = "none";
    b.style.backgroundColor = "transparent";
    b.disabled = true;
    console.log(grid);
}

function checkRow(index){

}