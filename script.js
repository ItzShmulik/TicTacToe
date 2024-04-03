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
            check(row, column);
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
    for(let i = 0; i < 3; i++){
        if(score[row][i] == 'x') rowXCount++;
        else if(score[row][i] == 'o') rowOCount;
    }
    // Check Column
    let colXCount = 0, colOCount = 0;
    for(let i = 0; i < 3; i++){
        if(score[i][column] == 'x') colXCount++;
        else if(score[i][column] == 'o') colOCount++;
    }

    // Check Main Diagonal
    let mainDiagXCount = 0,  mainDiagOCount = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(i == j){
                if(score[i][j] == 'x') mainDiagXCount++;
                else if(score[i][j] == 'o') mainDiagOCount++;
                break;
            }
        }
    }

    // Check Other diagonal
    let othDiagXCount = 0, othDiagOCount = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 3; j > 0; j--){
            if(3- i == j){
                if(score[i][j] == 'x') othDiagXCount++;
                else if(score[i][j] == 'o') othDiagOCount++;
            }
        }
    }

    if(rowXCount == 3 || colXCount == 3 || mainDiagXCount == 3 || othDiagXCount == 3) console.log("p1 win");
    else if(rowOCount == 3 || colOCount == 3 || mainDiagOCount == 3 || othDiagOCount == 3) console.log("p2 win");
}