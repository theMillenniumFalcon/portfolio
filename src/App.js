import Hero from "./components/hero/Hero";
import Tech from "./components/tech/Tech";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import BlogList from "./components/blogList/BlogList";
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Hero/>
      <Tech/>
      <ProjectList/>
      <BlogList/>
      <Contact/>
    </Container>
  );
}

const Container = styled.div`
overflow: hidden;
`;

export default App;
