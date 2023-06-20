import styled from 'styled-components';
import Header from './components/Header';
import Typing from './components/Typing';
import '../src/fonts/font.css'

const Div=styled.div`
  width:100vw;
  height:100vh;
  background:linear-gradient(to bottom, #FEFEDF,#C7DAC0 );
  font-family:"GabiaHealdot";
`

const Input=styled.input`
  width:85%;
  height:50px;
  border:none;
  border-radius:10px 0 0 10px;
  padding-left:10px;
  &:focus{
    outline:none;
  }
`
const InputDiv=styled.div`
  width:60%;
  height:50px;
  display:flex;
  margin:10px 10%;
  width:50%;

`

const CommentButton=styled.button`
  width:15%;
  border:none;
  color:white;
  background-color:#ACAC9A;
  border-radius:0 10px 10px 0;

  &:hover{
    background-color:#474838;
  }
`
const Board=styled.table`
  //cell 사이에 border 없애기
  border-collapse:collapse;
  overflow:hidden;
  width:80%;
  height:50%;
  margin:15px 10%;
  color:#474838;
  font-weight:bold;
  border-radius:10px;
  background-color:white;
`
const Td=styled.td`
  padding-left:10px;
`
function Home() {
  return (
    <Div className="App">
      <Header></Header>
      <Typing></Typing>
      <InputDiv>
        <Input placeholder="응원의 말을 남겨주세요 :)"></Input>
        <CommentButton onClick={()=>{alert('응원의 말이 전송되었어요!')}}>전송</CommentButton>
      </InputDiv>
      <Board>
        <tr style={{backgroundColor:'#474838',color:'white'}}>
          <Td>이름</Td>
          <Td>코멘트</Td>
          <Td>날짜</Td>
        </tr>
        <tr>
          <Td>이현지</Td>
          <Td>테스트 중</Td>
          <Td>2023/06/21</Td>
        </tr>
        <tr>
          <Td>이현지</Td>
          <Td>테스트 중</Td>
          <Td>2023/06/21</Td>
        </tr>
        <tr>
          <Td>이현지</Td>
          <Td>테스트 중</Td>
          <Td>2023/06/21</Td>
        </tr>
        <tr>
          <Td>이현지</Td>
          <Td>테스트 중</Td>
          <Td>2023/06/21</Td>
        </tr>
        <tr>
          <Td>이현지</Td>
          <Td>테스트 중</Td>
          <Td>2023/06/21</Td>
        </tr>
        
      </Board>
    </Div>
  );
}

export default Home;
