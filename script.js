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

    return {
        getToken
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

    const playRound = (row, col) => {
        if (board.getBoard()[row][col] === 0) {
            console.log('Chosen: Row ' + row + ' and Column ' + col);
            board.changeCell(row, col, getActivePlayer());
        }; //else error and choose another square
    
        //check for a winner here

        switchPlayerTurn();
        printNewRound();
    }

    printNewRound(); //initial game messages

    return {
        playRound,
        switchPlayerTurn
    }
};


//for testing purposes
const controller = gameController();