import styles from "./Contato.module.css"
import headericon from "../assets/headericon.svg"
import { useState } from "react";
 
export function Contato(){
    return(
        <div>
            <div className={styles.footer} id="contato">
                <div className={styles.contato}>
                    <h1>Transdimensional Passage</h1>
                    <br />
                    <p>Avenida Paulista, 1234</p>
                    <p>São Paulo, SP 01234-567</p>
                    <p>Brasil</p>
                </div>
                <div className={styles.logo}>
                    <img src={headericon} alt="icone" />
                    <p>TP</p>
                </div>
                <div className={styles.contato}>
                    <h1>Contato</h1>
                    <br />
                    <p>E-mail: info@tpassage.com.br</p>
                    <p>Instagram: @tpassageoficial</p>
                    <p>Twitter: @tpassage</p>
                </div>
            </div>
            <p className={styles.creditos}>Designed by CP2eJr</p>
        </div>
    )
}