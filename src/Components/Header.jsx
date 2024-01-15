import styles from "./Header.module.css"
import headericon from "../assets/headericon.svg"
import { useState } from "react";
 
export function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={headericon} alt="icone" />
                <p>TP</p>
            </div>
            <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#precos">Preços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            <div className={styles.login}>
                <p>Login</p>
                <button>Registrar</button>
            </div>
        </div>
    )
}