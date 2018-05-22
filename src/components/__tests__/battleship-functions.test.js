import React from 'react';
import ReactDOM from 'react-dom';
import { boardPieceExists, isBoatSunk, deepCopy, withImmutableCopy } from '../helper-functions/battleship-functions'
import { shallow } from 'enzyme'

it('Checks if the board piece exists', ()=>{
	const board = [
        [[0,false],[0,false],[0,false],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]]
      ]

    expect(boardPieceExists(board,0,0)).toEqual(true)
    expect(boardPieceExists(board,0,4)).toEqual(false)
    expect(boardPieceExists(board,4,3)).toEqual(false)
    expect(boardPieceExists(board,4,4)).toEqual(false)
    expect(()=>{
    	boardPieceExists(board,4)
    }).toThrow();
    expect(()=>{
    	boardPieceExists(board)
    }).toThrow();
    expect(()=>{
    	boardPieceExists()
    }).toThrow();
})


it('Checks to see if all boats of the selected number have been hit', ()=>{
	const board = [
        [[1,true],[0,false],[0,false],[0,false]],
        [[1,true],[0,false],[0,false],[0,false]],
        [[2,true],[2,true],[2,true],[2,true]],
        [[0,false],[0,false],[0,false],[0,false]]
      ]

    expect(isBoatSunk(board, 0,0,1)).toEqual(true)
    expect(isBoatSunk(board, 2,1,2)).toEqual(true)
    expect(isBoatSunk(board, 2,2,5)).toEqual(false)
    expect(isBoatSunk(board, 0,1,1)).toEqual(false)
    expect(isBoatSunk(board, 0,1,0)).toEqual(false)
    expect(()=>{
    	isBoatSunk(board, 0,1)
    }).toThrow()
    expect(()=>{
    	isBoatSunk(board, 0)
    }).toThrow()
    expect(()=>{
    	isBoatSunk(board)
    }).toThrow()
    expect(()=>{
    	isBoatSunk()
    }).toThrow()
})

it('Checks if copy was actually deep copied', ()=>{
	const board = [
		[0,0],
		[0,0]
	]

	const copiedBoard = deepCopy(board)
	board[0][0] = 10

	expect(copiedBoard[0][0]).toEqual(0)
})


it('Checks to see that original data array was not mutatated when using withImmutableCopy function', ()=>{
	const data = [[0,0], [0,0]]

	function changeData(data){
		data[0][0] = 9999
	}

	withImmutableCopy(changeData)(data)

	expect(data[0][0]).toEqual(0)
})







