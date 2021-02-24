import { FaRegCopyright, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from '../styles/components/Footer.module.css';

export function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div>
                <div className={styles.footerLeft}>
                    <h1>Vamos trabalhar juntos.</h1>
                    <h2>Vamos trabalhar juntos e dsenvevolver algo incrível.</h2>
                </div>
                
                <div className={styles.footerRight}>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/wesley-de-souza-851271161/">
                                Linkedin
                            </a>
                        </li>
                        <li>/</li>
                        <li>
                            <a href="https://github.com/WeslynSouza">
                                GitHub
                            </a>
                        </li>
                        <li>/</li>
                        <li>
                            <a href="https://twitter.com/Weslyn01">
                                Twitter
                            </a>
                        </li>
                        <li>/</li>
                        <li>
                            <a href="https://www.instagram.com/wsley_lyn/">
                                Instagram
                            </a>
                        </li>
                    </ul>
                    <p>Wesley.i476@gmail.com</p>
                </div>
            </div>
            
            <p>
                <FaRegCopyright/>
                Wesley de Souza 2021 | 
                <a href="https://www.linkedin.com/in/wesley-de-souza-851271161/">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/WeslynSouza">
                    <FaGithub/>
                </a>
                <a href="https://twitter.com/Weslyn01">
                    <FaTwitter/>
                </a>
                <a href="https://www.instagram.com/wsley_lyn/">
                    <FaInstagram/> 
                </a>         
            </p>
        </div>
    )
}