const resetButon = document.querySelector(".reset-button");

const cells = document.querySelectorAll(".board .cell");

const PlayerTurn = document.querySelector(".player-turn");

const Result = document.querySelector(".result");

let CurrentPlayer = "X";

let gameOver = false;

let moves = 0;

var options = [
    "", "", "", "", "", "", "", "", ""
]

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]

];

IntialGame();
// initial state 

function IntialGame(){
    moves = 0;
    gameOver = false;
    options.fill("");
    cells.forEach(cell => {
        cell.textContent = "";
       
    });
    PlayerTurn.textContent = `Player ${CurrentPlayer}'s turn`
    Result.textContent = "Whol will win";
}


// handel ceels click 

function HandleCellClick(){
    if(this.textContent || gameOver) return;
    this.textContent = CurrentPlayer;
    moves++;
    var getCellClass = parseInt(this.getAttribute("id"));
    options[getCellClass -1] = CurrentPlayer;
    console.log(options);

    CheckWin();
    ChangePlayer();
}






// change player

function ChangePlayer(){ 
     CheckWin();
    if(moves > 9){
        gameOver = true;
        Result.textContent = "It's a Draw!";
        return;
    }
    CurrentPlayer = CurrentPlayer === "X"? "O" : "X";
    PlayerTurn.textContent = `Player ${CurrentPlayer}'s turn`
}





// check win 

function CheckWin(){



 
    for( var i = 0; i < winningCombinations.length; i++){

        var condition = winningCombinations[i];

        if(options[condition[0]] &&
             options[condition[0]] === options[condition[1]] 
             && options[condition[1]] === options[condition[2]]){
            gameOver = true;
            Result.textContent = `Player ${options[condition[0]]} wins!`;
            return;
        }
    }

    if(moves === 9 &&!gameOver){
        gameOver = true;
        Result.textContent = "It's a Draw!";
    }
   

    
}

// reset game

resetButon.addEventListener("click", IntialGame);

cells.forEach(cell => cell.addEventListener("click", HandleCellClick));
