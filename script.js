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
    const getBoard = board;

    //method that changes a cell to a cross or circle
    const changeCell = (row, col, player) => {
        board[row][col] = player.getToken()
    };
};

function player() {

};

function gameController() {

};
