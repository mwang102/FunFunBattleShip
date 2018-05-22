import React from 'react';
import { shallow } from 'enzyme'
import Row from '../Row'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('row component',()=>{
	it('check for number of squares in each row', ()=>{
		const mockRow = [[5,false],[0,false],[0,false],[0,false]]

		const mockCallback = jest.fn()

		const wrapper = shallow(<Row data={mockRow} handlePick={mockCallback} 
									 rowNumber={1} columnNumber={1}/>)

		const squares = wrapper.find('Square')
		expect(squares.length).toEqual(4)
	})

	it('matches the snapshot', ()=>{
		const mockRow = [[5,false],[0,false],[0,false],[0,false]]

		const mockCallback = jest.fn()
		const tree = renderer.create(<Row data={mockRow} handlePick={mockCallback} 
									 rowNumber={1} columnNumber={1}/>).toJSON()
		
		expect(tree).toMatchSnapshot()
	})
})