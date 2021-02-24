
import styles from '../styles/components/Landing.module.css';

export function Landing() {
    return (
        <div className={styles.landingContainer}>
            <img src="img/OBJECTS.svg" alt="frontend"/>

            <div>
                <h1>Wesley de Souza</h1>
                <h2>Desenvolvedor full-stack</h2>
                <div>
                    <a href="https://twitter.com/Weslyn01">Twitter</a>
                    <a href="https://github.com/WeslynSouza">Github</a>
                    <a href="https://www.linkedin.com/in/wesley-de-souza-851271161/">Linkedin</a>
                </div>
            </div>
        </div>
    )
}