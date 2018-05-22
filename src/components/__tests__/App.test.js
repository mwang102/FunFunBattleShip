import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import Square from '../Square'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

describe('App', ()=>{
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});


	it('checks if IntoBoard gets updated correctly when only a hit occurs', ()=>{
		const wrapper = mount(<App/>)
		wrapper.setState({ board:[
	        [[5,false],[0,false],[0,false],[0,false]],
	        [[5,false],[0,false],[0,false],[0,false]],
	        [[5,false],[2,false],[2,false],[0,false]],
	        [[0,false],[0,false],[0,false],[0,false]]
	      ]
		})
		const firstSquare = wrapper.find('Square').at(0)
		firstSquare.simulate('click')

		const infoBoardTableTurnData = wrapper.find('InfoBoard__TableData').at(1).render().text()
		expect(infoBoardTableTurnData).toBe('1')

		const infoBoardTableHitData = wrapper.find('InfoBoard__TableData').at(3).render().text()
		expect(infoBoardTableHitData).toBe('1')

		const infoBoardTableNumberHitsLeft = wrapper.find('InfoBoard__TableData').at(11).render().text()
		expect(infoBoardTableNumberHitsLeft).toBe('4')
	})

	it('checks if IntoBoard gets updated correctly when a miss occurs', ()=>{
		const wrapper = mount(<App/>)
		wrapper.setState({ board:[
	        [[5,false],[0,false],[0,false],[0,false]],
	        [[5,false],[0,false],[0,false],[0,false]],
	        [[5,false],[2,false],[2,false],[0,false]],
	        [[0,false],[0,false],[0,false],[0,false]]
	      ]
		})
		const secondSquare = wrapper.find('Square').at(1)
		secondSquare.simulate('click')

		const infoBoardTableTurnData = wrapper.find('InfoBoard__TableData').at(1).render().text()
		expect(infoBoardTableTurnData).toBe('1')

		const infoBoardTableMissData = wrapper.find('InfoBoard__TableData').at(5).render().text()
		expect(infoBoardTableMissData).toBe('1')
	})

	it('checks if IntoBoard gets updated correctly when we sink a ship', ()=>{
		const wrapper = mount(<App/>)
		wrapper.setState({ board:[
	        [[5,false],[0,false],[0,false],[0,false]],
	        [[5,false],[0,false],[0,false],[0,false]],
	        [[5,false],[2,false],[2,false],[0,false]],
	        [[0,false],[0,false],[0,false],[0,false]]
	      ]
		})
		const firstSquare = wrapper.find('Square').at(0)
		const fourthSquare = wrapper.find('Square').at(4)
		const eighthSquare = wrapper.find('Square').at(8)
		firstSquare.simulate('click')
		fourthSquare.simulate('click')
		eighthSquare.simulate('click')

		const infoBoardTableTurnData = wrapper.find('InfoBoard__TableData').at(1).render().text()
		expect(infoBoardTableTurnData).toBe('3')

		const infoBoardTableHitData = wrapper.find('InfoBoard__TableData').at(3).render().text()
		expect(infoBoardTableHitData).toBe('3')

		const infoBoardTableNumberHitsLeft = wrapper.find('InfoBoard__TableData').at(11).render().text()
		expect(infoBoardTableNumberHitsLeft).toBe('2')

		const infoBoardTableNumberSunk = wrapper.find('InfoBoard__TableData').at(7).render().text()
		expect(infoBoardTableNumberSunk).toBe('1')
	})

	it('checks if IntoBoard gets updated correctly when we click a spot already targeted', ()=>{
		const wrapper = mount(<App/>)
		wrapper.setState({ board:[
	        [[5,true],[0,false],[0,false],[0,false]],
	        [[5,false],[0,false],[0,false],[0,false]],
	        [[5,false],[2,false],[2,false],[0,false]],
	        [[0,false],[0,false],[0,false],[0,false]]
	      ]
		})
		const firstSquare = wrapper.find('Square').at(0)
		firstSquare.simulate('click')

		const infoBoardTableTurnData = wrapper.find('InfoBoard__TableData').at(1).render().text()
		expect(infoBoardTableTurnData).toBe('1')

		const infoBoardTableAlreadyHit = wrapper.find('InfoBoard__TableData').at(9).render().text()
		expect(infoBoardTableAlreadyHit).toBe('1')

	})

	it('checks if IntoBoard gets updated correctly when we hit last ship', ()=>{
		const wrapper = mount(<App/>)
		wrapper.setState({ 
			board:[
		        [[5,false],[0,false],[0,false],[0,false]],
		        [[5,false],[0,false],[0,false],[0,false]]
		      ],
		    numberHitsLeft:2

		})
		const firstSquare = wrapper.find('Square').at(0)
		firstSquare.simulate('click')

		const fifthSquare = wrapper.find('Square').at(4)
		fifthSquare.simulate('click')

		const infoBoardTableTurnData = wrapper.find('InfoBoard__TableData').at(1).render().text()
		expect(infoBoardTableTurnData).toBe('0')

		const infoBoardTableHitData = wrapper.find('InfoBoard__TableData').at(3).render().text()
		expect(infoBoardTableHitData).toBe('0')

		const infoBoardTableMissData = wrapper.find('InfoBoard__TableData').at(5).render().text()
		expect(infoBoardTableMissData).toBe('0')

		const infoBoardTableNumberSunk = wrapper.find('InfoBoard__TableData').at(7).render().text()
		expect(infoBoardTableNumberSunk).toBe('0')

		const infoBoardTableAlreadyHit = wrapper.find('InfoBoard__TableData').at(9).render().text()
		expect(infoBoardTableAlreadyHit).toBe('0')

		const infoBoardTableNumberHitsLeft = wrapper.find('InfoBoard__TableData').at(11).render().text()
		expect(infoBoardTableNumberHitsLeft).toBe('5')

	})

	it('matches the snapshot', ()=>{
		const tree = renderer.create(<App/>).toJSON()
		expect(tree).toMatchSnapshot()
	})

});
