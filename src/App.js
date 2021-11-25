import styled from "styled-components"
import Hero from "./components/hero/Hero";

function App() {
  return (
    <AppContainer>
      <AppWrapper>
        <Hero/>
      </AppWrapper>
    </AppContainer>
  );
}

const AppContainer = styled.div`
background-color: #222;
height: 100vh;
weight: 100vw;
`;

const AppWrapper = styled.div`
border: 1px solid white;
height: 100vh;
width: 50%;
margin: auto;
padding: 0 5px;
`;

export default App;
