
export function boardPieceExists(board, row, column){
  if(board === undefined || row === undefined || column === undefined){
    throw new TypeError('missing input');
  }
  const maxColumns = board[0].length-1,
        maxRows = board.length-1
  
  if(row > maxRows || 
     column > maxColumns ||
     row < 0 ||
     column < 0
  ){
    return false
  }else{
    return true
  }

}


export function deepCopy(o) {
   var output, v, key;
   output = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       output[key] = (typeof v === "object") ? deepCopy(v) : v;
   }
   return output;
}


export function withImmutableCopy(f){
  //creates immutable copy of obj to use in future function
  return function(board, row, column, targetValue){
    const immutableBoard = deepCopy(board)
    let result = f(immutableBoard, row, column, targetValue)
    return result 
  }
}
export function isBoatSunk(immutableBoard, row, column,targetValue){
    //if missing a input throw error
    if(immutableBoard === undefined || row === undefined || column === undefined || targetValue === undefined){
      throw new TypeError('missing input');
    }

    let currentSquare = immutableBoard[row][column],
        rightDirection = true,
        leftDirection = true,
        downDirection = true,
        upDirection = true;

    //if current square is false or different from value we are looking for or target value is -1 return false
    if(currentSquare[1] === false || currentSquare[0] !== targetValue || targetValue === -1){
      return false
    }

    immutableBoard[row][column][0]= 'x'
    //go right
    if(boardPieceExists(immutableBoard,row,column+1) && immutableBoard[row][column+1][0] === targetValue){
        rightDirection = rightDirection && isBoatSunk(immutableBoard, row, column+1, targetValue)
    }
 
    //go left
    if(boardPieceExists(immutableBoard,row,column-1) && immutableBoard[row][column-1][0] === targetValue){
       leftDirection = leftDirection && isBoatSunk(immutableBoard, row, column-1,targetValue)
    }
 
    //go down
    if(boardPieceExists(immutableBoard,row+1,column) && immutableBoard[row+1][column][0] === targetValue){
      downDirection = downDirection && isBoatSunk(immutableBoard, row + 1, column,targetValue)
    }
    
    //go up
    if(boardPieceExists(immutableBoard,row-1,column) && immutableBoard[row-1][column][0] === targetValue){
      upDirection = upDirection && isBoatSunk(immutableBoard, row -1, column,targetValue);
    }
    
    return rightDirection && leftDirection && downDirection && upDirection
}








