import React from 'react'
import styled from "styled-components";
import Row from './Row'
import PropTypes from 'prop-types'


export default class BattleShipBoard extends React.Component{
	static propTypes = {
		handlePick:PropTypes.func.isRequired,
	}

	render(){
		const table = this.props.board.map((row, index)=>{
			return <Row handlePick={this.props.handlePick} rowNumber={index} key={index} data={row}/>
		})

		return (
			<BoardContainer> {table} </BoardContainer>
		)
	}

}


const BoardContainer = styled.section`
	display:flex;
	flex:4;
	flex-direction:column;
	height:auto;
	margin:1rem;
	max-width:1000px;
`;