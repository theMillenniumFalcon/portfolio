import Divider from "./components/divider/Divider";
import Hero from "./components/hero/Hero";
import Tech from "./components/tech/Tech";
import ProjectList from "./components/projectList/ProjectList";
import styled from 'styled-components'
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <Container>
      <Toggle/>
      <Hero/>
      <Divider/>
      <Tech/>
      <Divider/>
      <ProjectList/>
      <Divider/>
      <Contact/>
    </Container>
  );
}

const Container = styled.div`
overflow-x: hidden;
`;

export default App;
