
import styles from '../styles/components/Skills.module.css';

export function Skills() {
    return (
        <div className={styles.skillsContainer}>
            <h1>Habilidades</h1>
            <div>
                <img src="icons/html-5.svg" alt="html5"/>
                <img src="icons/css.svg" alt="css3"/>
                <img src="icons/javascript.svg" alt="javascript"/>
                <img src="icons/react.svg" alt="reat"/>
                <img src="icons/nodejs.svg" alt="nodejs"/>
                <img src="icons/typescript.svg" alt="typescript"/>
                <img src="icons/sass.svg" alt="sass"/>
                <img src="icons/xd.svg" alt="adobe xd"/>
            </div>
        </div>
    )
}