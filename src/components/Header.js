import React from 'react'
import styled from "styled-components";
import logo from '../logo.svg';


export default class Header extends React.Component{

 	render(){

 		return(
	 		<HeaderContainer>
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="App-title">Welcome to BattleShip</h1>
	        </HeaderContainer>
 			)
 	}
}

const HeaderContainer = styled.header`
	display:flex;
	justify-content:center;
	flex-direction:column;
	font-size:1rem;
    background-color: #222;
    height: 200px;
    padding: 20px;
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.5);
`