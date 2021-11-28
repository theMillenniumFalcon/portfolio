import styled from "styled-components"
import Blog from "./components/blog/Blog";
import Hero from "./components/hero/Hero"
import Project from "./components/project/Project";
import Skill from "./components/skill/Skill"
import Talk from "./components/talk/Talk";
import Tool from "./components/tool/Tool"
import Voluntary from "./components/voluntary/Voluntary";
import Work from "./components/work/Work";

function App() {
  return (
    <AppContainer>
      <AppWrapper>
        <Hero/>
        <Skill/>
        <Tool/>
        <Work/>
        <Voluntary/>
        <Project/>
        <Blog/>
        <Talk/>
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