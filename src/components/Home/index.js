import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import Header from '../Header'
// eslint-disable-next-line import/named
import {
  HomeCont,
  GameCont,
  ChoiceButton,
  ChoiceImg,
  // eslint-disable-next-line import/named
  RulesButton,
  RulesCont,
  CloseBtn,
  RulesImg,
  GameResultCont,
  FinalChoiceCont,
  Title,
  ResultText,
  PlayAgain,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    activeChoice: '',
    score: 0,
    gamePlaying: false,
    randomChoice: choicesList[Math.floor(Math.random() * choicesList.length)],
    resultText: '',
  }

  onRock = () => {
    this.setState({activeChoice: choicesList[0], gamePlaying: true})
    const {randomChoice} = this.state
    if (randomChoice.id === 'SCISSORS') {
      this.setState({resultText: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (randomChoice.id === 'PAPER') {
      this.setState({resultText: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (randomChoice.id === 'ROCK') {
      this.setState({resultText: 'IT IS DRAW'})
    }
  }

  onScissors = () => {
    this.setState({activeChoice: choicesList[1], gamePlaying: true})
    const {randomChoice} = this.state
    if (randomChoice.id === 'PAPER') {
      this.setState({resultText: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (randomChoice.id === 'ROCK') {
      this.setState({resultText: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (randomChoice.id === 'SCISSORS') {
      this.setState({resultText: 'IT IS DRAW'})
    }
  }

  onPaper = () => {
    this.setState({activeChoice: choicesList[2], gamePlaying: true})
    const {randomChoice} = this.state
    if (randomChoice.id === 'ROCK') {
      this.setState({resultText: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (randomChoice.id === 'SCISSORS') {
      this.setState({resultText: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (randomChoice.id === 'PAPER') {
      this.setState({resultText: 'IT IS DRAW'})
    }
  }

  playAgain = () => {
    this.setState(prevState => ({
      activeChoice: '',
      score: prevState.score,
      gamePlaying: false,
      randomChoice: choicesList[Math.floor(Math.random() * choicesList.length)],
      resultText: '',
    }))
  }

  renderResultView = () => {
    const {activeChoice, randomChoice, resultText} = this.state
    return (
      <FinalChoiceCont>
        <GameResultCont>
          <FinalChoiceCont>
            <Title>YOU</Title>
            <ChoiceImg src={activeChoice.imageUrl} alt="your choice" />
          </FinalChoiceCont>
          <FinalChoiceCont>
            <Title>OPPONENT</Title>
            <ChoiceImg src={randomChoice.imageUrl} alt="opponent choice" />
          </FinalChoiceCont>
        </GameResultCont>
        <FinalChoiceCont>
          <ResultText>{resultText}</ResultText>
          <PlayAgain type="button" onClick={this.playAgain}>
            PLAY AGAIN
          </PlayAgain>
        </FinalChoiceCont>
      </FinalChoiceCont>
    )
  }

  render() {
    const {gamePlaying, score} = this.state
    return (
      <HomeCont>
        <Header score={score} />
        <>
          {gamePlaying === false ? (
            <GameCont>
              <ChoiceButton
                type="button"
                data-testid="rockButton"
                id={choicesList[0].id}
                onClick={this.onRock}
              >
                <ChoiceImg
                  src={choicesList[0].imageUrl}
                  alt={choicesList[0].id}
                />
              </ChoiceButton>
              <ChoiceButton
                type="button"
                data-testid="scissorsButton"
                id={choicesList[1].id}
                onClick={this.onScissors}
              >
                <ChoiceImg
                  src={choicesList[1].imageUrl}
                  alt={choicesList[1].id}
                />
              </ChoiceButton>
              <ChoiceButton
                type="button"
                data-testid="paperButton"
                id={choicesList[2].id}
                onClick={this.onPaper}
              >
                <ChoiceImg
                  src={choicesList[2].imageUrl}
                  alt={choicesList[2].id}
                />
              </ChoiceButton>
            </GameCont>
          ) : (
            this.renderResultView()
          )}
        </>
        <Popup
          modal
          trigger={
            <RulesButton type="button" data-testid="rules">
              RULES
            </RulesButton>
          }
        >
          {close => (
            <RulesCont>
              <CloseBtn type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseBtn>
              <RulesImg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </RulesCont>
          )}
        </Popup>
      </HomeCont>
    )
  }
}

export default Home
