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
                        <li>Linkedin</li>
                        <li>/</li>
                        <li>GitHub</li>
                        <li>/</li>
                        <li>Twitter</li>
                        <li>/</li>
                        <li>Instagram</li>
                    </ul>
                    <p>Wesley.i476@gmail.com</p>
                </div>
            </div>
            
            <p>
                <FaRegCopyright/>
                Wesley de Souza 2021 | 
                <FaLinkedin/>
                <FaGithub/>
                <FaTwitter/>
                <FaInstagram/>   
            </p>
        </div>
    )
}