
import styles from '../styles/components/About.module.css';

export function About() {
    return (
        <div className={styles.aboutContainer}>
            <img src="img/perfil.jpg" alt="Perfil"/>

            <div>
                <h1>Sobre mim</h1>
                <p>
                    Olá, meu nome é Wesley de Souza, sou estudante de Análise e 
                    desenvolvimento de sistemas e trabalho com o desenvolvimento 
                    de aplicações web utilizando React e Node.js desde 2019. 
                    Possuo diversos projetos já desenvolvidos, utilizando tecnologias 
                    como Typescript, Sqlite, Sass, Next.js, etc. Sou dedicado e estou 
                    disposto a aprender sempre mais.
                </p>
            </div>
        </div>
    )
}