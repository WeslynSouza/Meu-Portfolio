import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../styles/components/Navbar.module.css';
import Scrollspy from 'react-scrollspy';
import { useContext } from 'react';
import { menuContext } from '../contexts/menuContext';

export function Navbar() {

    const { handleActiveMenu } = useContext(menuContext); 

    return (
            <div className={styles.navbarContainer}>
                <div className={styles.menuPrincipal}>
                    <h3>Meu portfólio</h3>

                    <Scrollspy items={ ['section-1', 'section-2', 'section-3']} currentClassName='is-current'>
                        <ul>
                            <li>
                                <a href="#Inicio">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#Sobre-mim">
                                    Sobre mim
                                </a>
                            </li>
                            <li>
                                <a href="#Meus-projetos">
                                    Meus projetos
                                </a>
                            </li>
                        </ul>
                    </Scrollspy>
                    
                </div>
                
                <div className={styles.menuSecundario}>
                    <button onClick={handleActiveMenu}>
                        <FaBars/>
                    </button>

                    <h1>
                        Meu portfólio
                    </h1>
                </div>
            </div>

    )
}