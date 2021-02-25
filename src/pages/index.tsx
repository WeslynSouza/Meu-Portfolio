import { About } from "../components/About";
import { Landing } from "../components/Landing";
import { Line } from "../components/Line";
import { Navbar } from '../components/Navbar';
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Footer } from '../components/Footer';
import { Sidebar } from "../components/Sidebar";

import styles from '../styles/pages/Index.module.css';

export default function Home() {
  
  return (
    <>
    <Sidebar/>
    <Navbar/>
    <div className={styles.container}>
      <section id="Inicio">
        <Landing/>
        <Line/>
      </section>
      <section id="Sobre-mim">
        <About/>
        <Skills/>
        <Line/>
      </section>
      <section id="Meus-projetos">
        <Projects/>
      </section>
    </div>
    <Footer/>
    </>  
  )
}
