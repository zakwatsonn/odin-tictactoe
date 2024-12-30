function gameBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    //creating board using nested loops
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(0);
        }
    }

    //method that allows board to be got while keeping private variable
    const getBoard = () => board;

    //method that changes a cell to a cross or circle
    const changeCell = (row, col, player) => {
        board[row][col] = player.getToken() //use whatever method gets the 1 or 2 from the player
    };

    //method that prints board to console
    const printBoard = () => console.log(board);
    
    return {
        getBoard,
        changeCell,
        printBoard
    }
};

function player(playerToken) {
    const getToken = () => playerToken;

    const isWinner = () => console.log('Player ' + playerToken + ' Wins!');

    return {
        getToken,
        isWinner
    }
};

function gameController() {
    const board = gameBoard();
    const playerOne = player(1);
    const playerTwo = player(2);

    let activePlayer = playerOne;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log("It's Player " + getActivePlayer().getToken() + "'s turn!");
    }

    const checkWinner = () => {
        //check rows
        if (board.getBoard().some(row => row[0] === row[1] && row[1] === row[2] && row[0] !== 0)) {
            return true;
        }

        //check cols
        for (let cols = 0; cols < 3; cols++) {
            if (board.getBoard()[0][cols] === board.getBoard()[1][cols] && board.getBoard()[1][cols] === board.getBoard()[2][cols] && board.getBoard()[0][cols] !== 0) {
                return true;
            }
        };

        //check diagonals
        if (board.getBoard()[0][0] === board.getBoard()[1][1] && board.getBoard()[1][1] === board.getBoard()[2][2] && board.getBoard()[0][0] !== 0) {
            return true;
        } else if (board.getBoard()[0][2] === board.getBoard()[1][1] && board.getBoard()[1][1] === board.getBoard()[2][0] && board.getBoard()[0][2] !== 0) {
            return true;
        };
    };

    const resetGame = () => {
        board.getBoard().forEach((row) => {
            for (let i = 0; i < 3; i++) {
            row[i] = 0;
            }
        })

        activePlayer = playerTwo;
    };

    const playRound = (row, col) => {
        if (board.getBoard()[row][col] === 0) {
            console.log('Chosen: Row ' + row + ' and Column ' + col);
            board.changeCell(row, col, getActivePlayer());
            
            //checking for winner
            if (checkWinner() === true) {
                getActivePlayer().isWinner();

                //resets the game
                resetGame();
            }

            switchPlayerTurn();

        } else {
            console.log('This square has already been chosen. Please choose again');
        };
        
        printNewRound();
    }

    printNewRound(); //initial game messages

    return {
        playRound,
        switchPlayerTurn
    }
};

//for testing purposes
const game = gameController();
const testplayer = player(3);