import styled from 'styled-components'

export const HomeCont = styled.div`
  background-color: #223a5f;
  background-size: cover;
  padding: 60px;
  display: flex;
  flex-direction: column;
`
export const GameCont = styled.div`
  width: 30%;
  margin-top: 100px;
  margin-bottom: 100px;
  align-self: center;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const ChoiceButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
export const ChoiceImg = styled.img`
  width: 120px;
  height: 120px;
`
export const RulesButton = styled(ChoiceButton)`
  background-color: white;
  border-radius: 8px;
  font-family: 'Bree Serif';
  font-weight: bold;
  font-size: 15px;
  color: #223a5f;
  align-self: flex-end;
  height: 30px;
  width: 120px;
`
export const RulesCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const CloseBtn = styled(ChoiceButton)`
  height: 30px;
  width: 30px;
  align-self: flex-end;
`
export const RulesImg = styled.img`
  margin: 0;
`
export const GameResultCont = styled(GameCont)`
  width: 40%;
  margin-bottom: 10px;
`
export const FinalChoiceCont = styled(RulesCont)`
  padding: 0px;
  justify-content: center;
  align-items: center;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: white;
`
export const ResultText = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
`
export const PlayAgain = styled(RulesButton)`
  height: 32px;
  width: 160px;
`
