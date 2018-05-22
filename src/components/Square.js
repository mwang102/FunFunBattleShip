import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'

    /* 2 flipped and hit
       1 not flipped yet and hit 
       0 not flipped and nothing under
      -1 flipped and nothing under 
    */

export default class Square extends React.Component{
  static propTypes = {
    rowNumber:PropTypes.number.isRequired,
    columnNumber:PropTypes.number.isRequired,
    data:PropTypes.array.isRequired
  }

  render(){
    const { data, rowNumber, columnNumber } = this.props
    const currentSquare = {
        row:rowNumber, 
        column:columnNumber, 
        data:data
        },
        squareBackground = data[0] > 0 && data[1] === true ? 'rgb(' + (80 + (data[0] * 50)) + ',0,0)' : 
                           data[0] ===  -1 ? 'SteelBlue' : 'BlanchedAlmond',
        hoverBackground = data.squareValue === 2 || data.squareValue === -1 ? '' : 'gold'

    return(
      <SquareContainer hoverBackground={hoverBackground} backGround = {squareBackground} squareValue={currentSquare.data}
        onClick={()=> this.props.handlePick(currentSquare)}>
      </SquareContainer>
    )
  }
}

const SquareContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 0px 5px;
    flex: 1 0 auto;
    padding: 0px 1.0875rem 1.45rem;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.5);
    font-size:30px;
    background-repeat:no-repeat;
    background-position: center; 
    background:${props => props.backGround };
    cursor:${props => props.squareValue[1] ? '' : 'pointer'}};
    -webkit-animation:${props => props.squareValue[1] ? 'flipInX 1s' : ''}};
    :hover{
      background:${props => props.hoverBackground }
`;
