import React from 'react';
import { shallow } from 'enzyme'
import BattleShipBoard from '../BattleShipBoard'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('BattleShipBoard', ()=>{
	it('check for row length', ()=>{
		const mockTable = [
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[2,false],[2,false],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]]
      ]

		const mockCallback = jest.fn()

		const wrapper = shallow(<BattleShipBoard handlePick={mockCallback} board={mockTable}/>)

		const rows = wrapper.find('Row')
		expect(rows.length).toEqual(4)
	})

	it('matches the snapshot', ()=>{
		const mockTable = [
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[2,false],[2,false],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]]
      ]

		const mockCallback = jest.fn()
		const tree = renderer.create(<BattleShipBoard handlePick={mockCallback} 
													  board={mockTable}/>).toJSON()
		
		expect(tree).toMatchSnapshot()
	})
})