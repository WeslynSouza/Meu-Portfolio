import { useContext } from "react";
import { FaTimes } from 'react-icons/fa';
import { menuContext } from "../contexts/menuContext";

import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {

    const { menuIsActive, handleActiveMenu } = useContext(menuContext);

    return (
        <div className={menuIsActive ? styles.sidebarActive : styles.sidebar}>
            <div>
                <h1>Meu portfólio</h1>
                <button onClick={handleActiveMenu}>
                    <FaTimes/>
                </button>
            </div>
            <ul>
                <li>
                    <a href="#Inicio" onClick={handleActiveMenu}>Início</a>
                </li>
                <li>
                    <a href="#Sobre-mim" onClick={handleActiveMenu}>Sobre mim</a>
                </li>
                <li>
                    <a href="#Meus-projetos" onClick={handleActiveMenu}>Meus projetos</a>
                </li>
            </ul>
        </div>
    )
}