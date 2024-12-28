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
        board[row - 1][col - 1] = player.getToken() //use whatever method gets the 1 or 2 from the player
    };

    //method that prints board to console
    const printBoard = () => {
        console.log(board);
    }

    return {
        getBoard,
        changeCell,
        printBoard
    }
};

function player(playerNumber) {
    const getToken = () => playerNumber;

    return {
        getToken
    }
};

function gameController() {
    const playerOne = player(1);
    const playerTwo = player(2);
};

const adminPlayer = player(1);
const theBoard = gameBoard();