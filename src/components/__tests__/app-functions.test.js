import React from 'react';
import { handleInfoBoard, resetInfoBoard, countBoatHitsLeft } from '../helper-functions/app-state-functions'



it('Returns correct new state when game isnt over', ()=>{
	const state = {
      board:[
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[2,false],[2,false],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]]
      ],
      turn:0,
      hits:0,
      miss:0,
      sunkBoats:0,
      alreadyHit:0,
      numberHitsLeft:5,
    }

    const props = {
    	row:0,
    	column:0,
    	data:[5,false]
    }

    expect(handleInfoBoard(state,props)).toEqual({
      board:[
        [[5,true],[0,false],[0,false],[0,false]],
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[2,false],[2,false],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]]
      ],
      turn:1,
      hits:1,
      miss:0,
      sunkBoats:0,
      alreadyHit:0,
      numberHitsLeft:4,
    })
})

it('Returns correct new state when game is over', ()=>{
	const state = {
      board:[
        [[5,true],[0,false],[0,false],[0,false]],
        [[5,true],[0,false],[0,false],[0,false]],
        [[5,false],[2,true],[2,true],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]]
      ],
      turn:4,
      hits:4,
      miss:0,
      sunkBoats:1,
      alreadyHit:4,
      numberHitsLeft:1,
    }

    const props = {
    	row:2,
    	column:0,
    	data:[2,false]
    }

    expect(resetInfoBoard(state,props)).toEqual({
      board:[
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[2,false],[2,false],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]]
      ],
      turn:0,
      hits:0,
      miss:0,
      sunkBoats:0,
      alreadyHit:0,
      numberHitsLeft:5,
    })
})

it('Returns correct new state when game is over', ()=>{
	const board = [
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[2,false],[2,false],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]]
      ]

    expect(countBoatHitsLeft(board)).toBe(5)
})


