import styled from "styled-components"
import Hero from "./components/hero/Hero"
import Skill from "./components/skill/Skill"
import Tool from "./components/tool/Tool"

function App() {
  return (
    <AppContainer>
      <AppWrapper>
        <Hero/>
        <Skill/>
        <Tool/>
      </AppWrapper>
    </AppContainer>
  );
}

const AppContainer = styled.div`
background-color: #222;
height: 100vh;
width: 100vw;
overflow-x: hidden;
`;

const AppWrapper = styled.div`
height: 100vh;
width: 50%;
margin: auto;
padding: 0 5px;
`;

export default App;
