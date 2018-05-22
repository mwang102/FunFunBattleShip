import React from 'react';
import { shallow } from 'enzyme'
import Square from '../Square'
import 'jest-styled-components'
import renderer from 'react-test-renderer'

describe('square component',()=>{
	it('checks if there is one square', ()=>{
		const mockData = [5,false],
			  mockCallback = jest.fn()

	    const wrapper = shallow(<Square rowNumber data={mockData} rowNumber={0} columnNumber={0}/>)
		expect(wrapper.length).toEqual(1)
	})

	it('Square color when not flipped and future miss',()=>{
		const mockData = [0,false],
			  mockCallback = jest.fn()

		const wrapper = shallow(<Square handlePick={mockCallback} data={mockData} rowNumber={0} columnNumber={0}/>)
		expect(wrapper).toHaveStyleRule('background', 'BlanchedAlmond')
	})

	it('Square color when flipped and hit',()=>{
		const mockData = [5,true],
			  mockCallback = jest.fn()

		const wrapper = shallow(<Square handlePick={mockCallback} data={mockData} rowNumber={0} columnNumber={0}/>)
		expect(wrapper).toHaveStyleRule('background', 'rgb(' + (80 + (mockData[0] * 50)) + ',0,0)' )
	})

	it('Square color when flipped and miss',()=>{
		const mockData = [-1,true],
			  mockCallback = jest.fn()

		const wrapper = shallow(<Square handlePick={mockCallback} data={mockData} rowNumber={0} columnNumber={0}/>)
		expect(wrapper).toHaveStyleRule('background', 'SteelBlue' )
	})

	it('matches the snapshot', ()=>{
		const mockData = [0,false],
			  mockCallback = jest.fn()

		const tree = renderer.create(<Square handlePick={mockCallback} data={mockData} rowNumber={0} columnNumber={0}/>).toJSON()
		
		expect(tree).toMatchSnapshot()
	})

})