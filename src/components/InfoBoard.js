import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'

const TableData = styled.td`
	font-size:2rem;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`

const TableContainer = styled.table`
	flex:1;
	margin:1rem;
    white-space: nowrap;

`

export default class InfoBoard extends React.Component{
	static propTypes = {
		turn:PropTypes.number.isRequired,
		hits:PropTypes.number.isRequired,
		miss:PropTypes.number.isRequired,
		sunkBoats:PropTypes.number.isRequired,
		alreadyHit:PropTypes.number.isRequired,
		numberHitsLeft:PropTypes.number.isRequired,
	}

 	render(){
 		const { 
 			turn,
 			hits,
 			miss,
 			sunkBoats,
 			alreadyHit,
 			numberHitsLeft,
 		} = this.props

 		return(
			 <TableContainer>
				<tbody>
				  <tr>
				    <TableData>Turns:</TableData>
				    <TableData>{turn}</TableData>
				  </tr>
				  <tr>
				    <TableData>Hits:</TableData>
				    <TableData>{hits}</TableData>
				  </tr>
				  <tr>
				    <TableData>Miss:</TableData>
				    <TableData>{miss}</TableData>
				  </tr>
				  <tr>
				    <TableData># Sunk:</TableData>
				    <TableData>{sunkBoats}</TableData>
				  </tr>
				  <tr>
				    <TableData>Already Hit :</TableData>
				    <TableData>{alreadyHit}</TableData>
				  </tr>
				  <tr>
				    <TableData>Number Hits Left :</TableData>
				    <TableData>{numberHitsLeft}</TableData>
				  </tr>
			  </tbody>
			</TableContainer>
 			)
 	}
}