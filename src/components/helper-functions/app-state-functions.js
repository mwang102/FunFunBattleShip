import update from 'immutability-helper'
import { isBoatSunk, withImmutableCopy } from './battleship-functions'

export function handleInfoBoard(state,props){
    const{ 
      row, 
      column, 
      data
    } = props

    //flip updatedSquare to check if hit or miss
    const updatedSquare = data[0] > 0 ? data[0] : -1

    const updatedBoard = update(state.board, {
          [row]:{
            [column]:{
              $set:[updatedSquare,true]
            }
          }
      })

    const boatHit = data[1] === true ? 0 : data[0] > 0 ? 1 : 0,
          boatMiss = data[1] === true ? 0 : data[0] > 0 ? 0 : 1,
          alreadyHit = data[1] === true ? 1 : 0,
          sunkBoat = data[1] === true ? 0 : withImmutableCopy(isBoatSunk)(updatedBoard, row, column, updatedSquare) ? 1 : 0

	return {
		board:updatedBoard,
		turn:state.turn + +1,
		hits: state.hits + boatHit,
		miss: state.miss + boatMiss,
		sunkBoats: state.sunkBoats + sunkBoat,
		alreadyHit: state.alreadyHit + alreadyHit,
		numberHitsLeft: state.numberHitsLeft - boatHit,
	}
}

export function resetInfoBoard(alertMesage){
	const board = [
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[2,false],[2,false],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]]
      ]

    alert("All ships have been sunk! GAME OVER")

	return {
		board:board,
		turn:0,
		hits: 0,
		miss: 0,
		sunkBoats: 0,
		alreadyHit: 0,
		numberHitsLeft: countBoatHitsLeft(board),
	}
}

export function countBoatHitsLeft(board){
	return board.reduce((prev,current)=>{
		return prev + current.reduce((prev,current)=>{
			if(current[0] > 0){
				prev++
			}
			return prev
		},0)
	},0)
}















