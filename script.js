function sudokuSolver(puzzle){
  let object = {};                           //hold not possible numbers
  let numbers;                               //not possible numbers of the row
   let finishPuzzle = 81;
   while (finishPuzzle > 0){
     finishPuzzle = 0;
    for(let v=0; v<puzzle.length; v++){      //iterate through vertically
      for(let h=0; h<puzzle.length; h++){    //iterate through horizontally
        if(puzzle[v][h] === 0){              //iterate to find 0
          object = {};                       //empthy object
          for(let i=0; i<9; i++){
            if(puzzle[v][i] > 0) {           //collect the numbers that are in the column so can not be a possible number in the column
              object[puzzle[v][i]] = true;
            }
            if(puzzle[i][h] > 0) {           //collect the numbers that are in the row so can not be a possible number in the row
              object[puzzle[i][h]] = true;
            }
          }
          for(let v3x3=Math.floor(v/3)*3; v3x3<Math.floor(v/3)*3+3; v3x3++){
            for(let h3x3=Math.floor(h/3)*3; h3x3<Math.floor(h/3)*3+3; h3x3++){
              if(puzzle[v3x3][h3x3]){
                object[puzzle[v3x3][h3x3]] = true;
              }
            }
          }
          numbers = Object.keys(object);
          if (numbers.length === 8){
            for(var i=1; i <= 9; i++){
              if(numbers.indexOf(i.toString()) < 0){
                puzzle[v][h] = i;
              }
            }
          } else {
            finishPuzzle++;
          }
        } 
      }
    }
  } 
  return puzzle;
}



function renderInitialSudoku(){
  let gridItems = document.getElementsByClassName("item");
  let i=0; 
  while(i<8){
    console.log('puzzle', puzzle);
    puzzle.forEach(function(o){         //outer array
      console.log('puzzle[o]', o);
      let innerPuzzle = o;                    //hold outer array to innerArray
      console.log('innerPuzzle', innerPuzzle);
      innerPuzzle.forEach(function(n){        //inner array one by one
        console.log('n', n);
        console.log('gridItems[i]', gridItems[i]);
        gridItems[i].innerHTML = n;         //render inner arrays per row in the grid
        i++;                                  //render next row (from 0 - 8)
      })
    })
  } 
}

function renderSolvedSudoku(){
  let gridItems = document.getElementsByClassName("item");
  let array = sudokuSolver(puzzle);
  console.log('solvedarray', array);
  let i=0;
  while(i<8){
    array.forEach(function(o){
      console.log('array[o]', o);
      let innerArray = o;
      innerArray.forEach(function(n){
        console.log('solved', n);
        console.log('gridItems[i]', gridItems[i]);
        gridItems[i].innerHTML = n;
        i++;
      })
    })
  }
}

let puzzle = [
            [9,4,6,0,0,0,8,3,0],
            [0,0,8,9,0,0,0,4,5],
            [0,7,3,0,0,2,1,9,6],
            [0,0,0,2,0,0,0,0,1],
            [0,9,0,1,0,0,3,7,8],
            [8,0,0,0,0,0,4,0,0],
            [0,0,1,7,2,6,9,0,0],
            [4,6,0,0,1,0,2,0,0],
            [2,8,0,0,9,0,6,0,3]];
let puzzle2 = [
            [0,3,0,0,6,2,0,7,0],
            [2,7,6,8,1,5,0,0,9],
            [9,0,0,0,3,0,2,5,0],
            [0,0,0,5,8,0,0,0,7],
            [8,0,7,0,0,0,9,0,0],
            [0,2,4,0,0,0,0,0,0],
            [0,4,9,6,0,0,1,3,0],
            [6,1,0,7,4,0,5,0,0],
            [0,0,8,2,9,0,0,6,4]];

let empthyPuzzle = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]];

renderInitialSudoku();
console.log('final', sudokuSolver(puzzle));
