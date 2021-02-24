
import styles from '../styles/components/Navbar.module.css';

export function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <div>
                <h3>Meu portfólio</h3>

                <ul>
                    <li>Início</li>
                    <li>Sobre mim</li>
                    <li>Meus projetos</li>
                </ul>
            </div>
            
        </div>
    )
}