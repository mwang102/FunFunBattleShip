import React from 'react';
import { shallow } from 'enzyme'
import InfoBoard from '../InfoBoard'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import styled from "styled-components";

describe('Info Board', ()=>{
	it('Info props are matched to correct location', ()=>{ 
		const wrapper = shallow(<InfoBoard numberHitsLeft={5} 
										   alreadyHit={0} 
										   turn={0} 
										   hits={0} 
										   miss={0} 
										   sunkBoats={0}/>)

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
		const tree = renderer.create(<InfoBoard numberHitsLeft={5} 
										   alreadyHit={0} 
										   turn={0} 
										   hits={0} 
										   miss={0} 
										   sunkBoats={0}/>).toJSON()
		
		expect(tree).toMatchSnapshot()
	}) 

})