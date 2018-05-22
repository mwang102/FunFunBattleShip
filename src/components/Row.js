import React from 'react'
import Squares from './Square'
import styled, { keyframes } from "styled-components";
import PropTypes from 'prop-types'


export default class Row extends React.Component{
  static propTypes = {
    handlePick:PropTypes.func.isRequired,
    rowNumber:PropTypes.number.isRequired
  }

  render(){
    let squares = this.props.data.map((square,index)=>{

        return <Squares handlePick={this.props.handlePick} 
                rowNumber={this.props.rowNumber} 
                columnNumber={index} key={index} data={square}/>
    })

    return(
      <RowContainer rowNumber={this.props.rowNumber}>
        {squares}
      </RowContainer>
    )
  }
}

const visibility = (delay) => {
  return keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {

    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

`
};

const RowContainer = styled.div`
    display:flex;
    flex: 1 0 auto;
    margin:5px;
    background:ivory;
    height:auto;
    animation: ${props => visibility(props.rowNumber)}};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-fill-mode: both;
    animation-delay:${props => '.' + props.rowNumber + 's'
    }};
`;
