import { About } from "../components/About";
import { Landing } from "../components/Landing";
import { Line } from "../components/Line";
import { Navbar } from '../components/Navbar';
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Footer } from '../components/Footer';

import styles from '../styles/pages/Index.module.css';

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <Landing/>
        <Line/>
        <About/>
        <Skills/>
        <Line/>
        <Projects/>
      </div>
      <Footer/>
    </>
    
  )
}
