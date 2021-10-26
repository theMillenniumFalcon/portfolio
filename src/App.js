import { useContext } from 'react'
import Divider from "./components/divider/Divider";
import Hero from "./components/hero/Hero";
import TechList from "./components/techList/TechList";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import BlogList from "./components/blogList/BlogList";
import { ThemeContext } from './context/context';

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div
    style={{
      backgroundColor: darkMode ? "black" : "white",
      color: darkMode && "white",
      overflow: "hidden"
    }}
    >
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
    </div>
  );
}

export default App;
