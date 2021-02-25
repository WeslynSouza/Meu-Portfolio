import { FaBars } from 'react-icons/fa';
import styles from '../styles/components/Navbar.module.css';
import Scrollspy from 'react-scrollspy';

export function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <div>
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
            
            <button>
                <FaBars/>
            </button>
        </div>
    )
}