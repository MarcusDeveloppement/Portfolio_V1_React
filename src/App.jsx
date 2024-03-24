import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Description from "./components/Description/Description";
import Skills from "./components/Skills/Skills";
import styles from "./App.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Projects from "./components/Projects/Projects";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className={styles.appContainer}>
      <Header />
      <About />
      <Description />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
