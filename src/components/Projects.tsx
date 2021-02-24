
import styles from '../styles/components/Projects.module.css';

export function Projects() {
    return (
        <div className={styles.projectsContainer}>
            <h1>
                Meus projetos
            </h1>

            <div>
                <div className={styles.project}>
                    <h3>Brasil fortress</h3>
                    <a href="https://github.com/WeslynSouza/BFTF2">
                        <div style={{backgroundImage: 'url(img/Noticia.png)'}}/>
                    </a>
                </div>
                <div className={styles.project}>
                    <h3>Proffy</h3>
                    <a href="https://github.com/WeslynSouza/Proffy">
                        <div style={{backgroundImage: 'url(img/proffy.png)'}}/>
                    </a>
                </div>
                <div className={styles.project}>
                    <h3>Be the Hero</h3>
                    <a href="https://github.com/WeslynSouza/be-the-hero">
                        <div style={{backgroundImage: 'url(img/bethehero.png)'}}/>
                    </a>
                </div >
                <div className={styles.project}>
                    <h3>Happy</h3>
                    <a href="https://github.com/WeslynSouza/Happy">
                        <div style={{backgroundImage: 'url(img/happy.png)'}}/>
                    </a>
                </div>
                <div className={styles.project}>
                    <h3>Reactflix</h3>
                    <a href="https://github.com/WeslynSouza/ReactFlix">
                        <div style={{backgroundImage: 'url(img/aluraflix.png)'}}/>
                    </a>
                </div>
                <div className={styles.project}>
                    <h3>PokemonBattle</h3>
                    <a href="https://github.com/WeslynSouza/React-PokemonBattle">
                        <div style={{backgroundImage: 'url(img/pokemon.png)'}}/>
                    </a>
                </div>
            </div>
        </div>
    )
}