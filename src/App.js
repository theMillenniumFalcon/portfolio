import styled from "styled-components"
import Hero from "./components/hero/Hero";
import Tech from "./components/tech/Tech";

function App() {
  return (
    <AppContainer>
      <AppWrapper>
        <Hero/>
        <Tech/>
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
