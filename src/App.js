import styled from "styled-components"
import Blog from "./components/blog/Blog";
import Hero from "./components/hero/Hero"
import Project from "./components/project/Project";
import Skill from "./components/skill/Skill"
import Talk from "./components/talk/Talk";
import Tool from "./components/tool/Tool"
import Voluntary from "./components/voluntary/Voluntary";
import Work from "./components/work/Work";
import {responsive1, responsive2} from "./responsive"
import { BrowserRouter as Router,Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <AppContainer>
      <AppWrapper>
        <Hero/>
        <Skill/>
        <Tool/>
        <Work/>
        <Voluntary/>
        <Project/>
        <Blog/>
        {/* <Talk/> */}
      </AppWrapper>
    </AppContainer>
      </Switch>
    </Router>
    
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
justify-content: center;
${responsive1({ width:"85%" })}
${responsive2({ width:"80%" })}
`;

export default App;