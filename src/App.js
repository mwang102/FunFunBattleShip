import React, { Component } from 'react';
import styled from 'styled-components';
import BattleShipBoard from './components/BattleShipBoard'
import '../node_modules/animate.css/animate.css'
import InfoBoard from './components/InfoBoard'
import Header from './components/Header'
import { handleInfoBoard, resetInfoBoard} from './components/helper-functions/app-state-functions'


class App extends Component {
  constructor(){
    super()

    this.state = {
      board:[
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[0,false],[0,false],[0,false]],
        [[5,false],[2,false],[2,false],[0,false]],
        [[0,false],[0,false],[0,false],[0,false]]
      ],
      turn:0,
      hits:0,
      miss:0,
      sunkBoats:0,
      alreadyHit:0,
      numberHitsLeft:5,
    }

    this.handlePick = this.handlePick.bind(this)
  }

  handlePick(event){ 
    const boatHit = event.data[1] === true ? 0 : event.data[0] > 0 ? 1 : 0,
          correctState = this.state.numberHitsLeft - boatHit === 0 ? resetInfoBoard() : handleInfoBoard(this.state,event)

    this.setState(correctState)
  }


  render() {
    const {  
      board, 
      turn,
      hits,
      miss,
      sunkBoats,
      alreadyHit,
      numberHitsLeft,
    } = this.state

    return (
      <AppContainer>
        <Header/>
        <h1>
          To get started, click a square!
        </h1>
        <MainSection>
            <InfoBoard numberHitsLeft={numberHitsLeft} alreadyHit={alreadyHit} turn={turn} hits={hits} miss={miss} sunkBoats={sunkBoats}/>
            <BattleShipBoard handlePick={this.handlePick} board={board}/>
        </MainSection>
      </AppContainer>
    );
  }
}

const MainSection = styled.section`
    display:flex;
    margin:0 10rem;
    flex:1;


`

const AppContainer = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    font-size: 16px;
    font-family: Helvetica, Arial, sans-serif;
    margin:0;
    padding:0;
    min-height:100vh;
`

export default App;
