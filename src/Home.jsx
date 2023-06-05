import styled from 'styled-components';
import Header from './components/Header';

const Div=styled.div`
  width:100vw;
  height:100vh;
  background:linear-gradient(to bottom, #FEFEDF,#C7DAC0 );
`

function Home() {
  return (
    <Div className="App">
      <Header></Header>
    </Div>
  );
}

export default Home;
