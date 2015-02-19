//************************************************************//
// Title:    Nic's Sudoku js File!
// Site:     sudoku-solver
// Author:   Nic Wolf
// Sources:  None
// Revision: 0.0.1 (2/18/2015)
//************************************************************//
/* Description:
   Methods for solving us some sudoku puzzles.

   TODOS:
     - 
   NOTES:
      I've been flying a little blind on this... I'm still 
      trying to get everything where I want it, but I 
      figure this is as good a place as any to stop for the
      night.
*/


//Loading this file from the DOM head; init the damn thing.
window.onload = init;

function init() {

  // I think the inner arrays are going to have to simulate 
  // the rows of the whole board, rather than the 3x3 boxes...
  var board = [ [1,2,3,4,5,6,7,8,9],
                [1,2,3,4,5,6,7,8,9],
                [1,2,3,4,5,6,7,8,9],
                [1,2,3,4,5,6,7,8,9],
                [1,2,3,4,5,6,7,8,9],
                [1,2,3,4,5,6,7,8,9],
                [1,2,3,4,5,6,7,8,9],
                [1,2,3,4,5,6,7,8,9],
                [1,2,3,4,5,6,7,8,9] ];


  function parseBoard(board) {
    // praying I'm not just flying blind on this one...
    // Take the board and do some shit to it... later.
  }//end parseBoard()


  function saveEmpties(board) {
    // Setup a matrix to store the empties
    var emptyPositions = [];

    // Check each box for an empty value
    for(var row = 0; row < board.length; row++) {
      for(var col = 0; col < board[row].length; col++) {
        
        if(board[row][col] === "") {       // If the entry is empty,
          emptyPositions.push([row, col]); // save that to the matrix
        }
      }
    }

    return emptyPositions; // Return a matrix of empties
  };//end saveEmpties()



/*
   Ok, assuming i've parsed my data into 2 matrixes, one storing the 
   empties (user entries) and the other holding the hard values (the 
   main board), I should be able to loop through each, check the 
   values, and return everything to to board...
*/
  function evaluator(board, emptyPositions) {
    var row;
    var column;
    var limit = 9, // set a numeric limit to keep from breaking shit
    var i;         // defining iterator here. we need it outside the scope of the loop.

    for (i = 0; i < emptyPositions.length;) { // Loop through every empty
      row    = emptyPositions[i][0];
      column = emptyPositions[i][1];

      var value = board[row][column] + 1;     // Try the next value
      var found = false;                      // Toggle for good values

      while (!found && value <= limit) { // cycle through every value until there's a match

        // If the value is found, set the position to the value and move to the next position.
          if (this.checkValue(board, column, row, value)) { // TODO - maybe write the checkValue() needs to return bool after checking everything on the board.
          i++;
        } else { // Else try the next value
          value++;
        }
      }

      if (!found) {             // If no value was found before the limit
        board[row][column] = 0; // step back to the previous position
        i--;
      }
    }

    // Send the solution back to the board
    return board;
  };// end evaluator


}//end init()
