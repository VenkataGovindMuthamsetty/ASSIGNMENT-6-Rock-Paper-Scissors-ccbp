import {
  HeaderCont,
  HeadingCont,
  ScoreCardCont,
  ScoreHead,
  ScoreGot,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderCont>
      <HeadingCont>ROCK PAPER SCISSORS</HeadingCont>
      <ScoreCardCont>
        <ScoreHead>Score</ScoreHead>
        <ScoreGot>{score}</ScoreGot>
      </ScoreCardCont>
    </HeaderCont>
  )
}

export default Header
