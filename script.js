// Variables
const buttonGrid = document.getElementsByClassName("button");
let tempArr = Array.prototype.slice.call(buttonGrid);

let currentPlayer = "p1";
let spacesLeft = 9;

let grid = [];
let score = [];

// Create a 2d array that will be used to assign x's and o's to
for(let i = 0; i < 3; i++){
    score[i] = [];
    for(let j = 0; j < 3; j++){
        score[i][j] = [];
    }
}

// Convert buttonGrid to 2d array and insert to grid variable
while(tempArr.length > 0){
    grid.push(tempArr.splice(0, 3));
}


for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
        const button = grid[i][j];
        button.addEventListener("click", function(){
            addSymbol(button, i, j);
            if(spacesLeft == 0) endGame("draw");
            check(i, j);
        });
    }
}

// Function for adding x or o to the board
function addSymbol(b, row, column){

    const img = document.createElement("img");

    if(currentPlayer == "p1"){
        img.src = "x.png";
        img.className = "x";
        score[row][column] = 'x';
        currentPlayer = "p2";
    }
    else{
        img.src = "o.png";
        img.className = "o";
        score[row][column] = 'o';
        currentPlayer = "p1";
    }

    b.appendChild(img);
    b.style.opacity = 100;
    b.style.border = "none";
    b.style.backgroundColor = "transparent";
    b.disabled = true;

    spacesLeft--;
}

function check(row, column){
    // Check row
    let rowXCount = 0, rowOCount = 0;
    for(let i = 0; i < score[row].length; i++){
        if(score[row][i] == 'x') rowXCount++;
        else if(score[row][i] == 'o') rowOCount++;
    }

    if(rowXCount == 3){
        console.log("p1 won");
        endGame("p1");
        return;
    }if(rowOCount == 3){
        console.log("p2 won");
        endGame("p2");
        return;
    }


    // Check column
    let colXCount = 0, colOCount = 0;
    for(let i = 0; i < score.length; i++){
        if(score[i][column] == 'x') colXCount++;
        else if(score[i][column] == 'o') colOCount++;
    }

    if(colXCount == 3){
        console.log("p1 won");
        endGame("p1");
        return;
    }if(colOCount == 3){
        console.log("p2 won");
        endGame("p2");
        return;
    }

    // Check Main diagonal (Top left to bottom right)
    let mdXCount = 0, mdOCount = 0;
    for (let i = 0; i < score.length; i++) {
        for (let j = 0; j < score[i].length; j++) {
            if(i == j){
                if(score[i][j] == 'x') mdXCount++;
                else if(score[i][j] == 'o') mdOCount++;
            }
        }
    }

    if(mdXCount == 3){
        console.log("p1 won");
        endGame("p1");
        return;
    }if(mdOCount == 3){
        console.log("p2 won");
        endGame("p2");
        return;
    }

    // Check sub diagonal (Top right to bottom  left)
    let sdXCount = 0, sdOCount = 0;
    for (let i = 0; i < score.length; i++) {
        for (let j = score[i].length - 1; j >= 0; j--) {
            if(score[i].length - 1 - i == j){
                if(score[i][j] == 'x') sdXCount++;
                else if(score[i][j] == 'o') sdOCount++;
            }
        }
    }

    if(sdXCount == 3){
        console.log("p1 won");
        endGame("p1");
        return;
    }if(sdOCount == 3){
        console.log("p2 won");
        endGame("p2");
        return;
    }
}

function endGame(player){
    
    for(let i = 0; i < buttonGrid.length; i++){
        const b = buttonGrid[i];
        b.style.opacity = 100;
        b.style.border = "none";
        b.style.backgroundColor = "transparent";
        b.disabled = true;
    }

    const winTxt = document.getElementById("win");
    

    setTimeout(() => {
        if(player == "p1") winTxt.innerText = "Player 1 Win!";
        else if(player == "p2") winTxt.innerText = "Player 2 Win!";
        else winTxt.innerText = "Draw!";
    }, 1000)

   
}