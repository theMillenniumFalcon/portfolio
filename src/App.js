import Divider from "./components/divider/Divider";
import Hero from "./components/hero/Hero";
import TechList from "./components/techList/TechList";
import ProjectList from "./components/projectList/ProjectList";
import styled from 'styled-components'
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import BlogList from "./components/blogList/BlogList";

function App() {
  return (
    <Container>
      <Toggle/>
      <Hero/>
      <Divider/>
      <TechList/>
      <Divider/>
      <ProjectList/>
      <Divider/>
      <BlogList/>
      <Divider/>
      <Contact/>
    </Container>
  );
}

const Container = styled.div`
overflow-x: hidden;
`;

export default App;
