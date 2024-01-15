import styles from "./Sobre.module.css"
import img1 from "../assets/Sobre/img1.svg"
import img2 from "../assets/Sobre/img2.svg"
 
export function Sobre(){
    return(
        <div className={styles.sobre} id="sobre">
            <div className={styles.imagens}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
            <div className={styles.infos}>
                <p>SOBRE</p>
                <h1>Nós existimos para tornar realidade tudo o que você sonha em explorar</h1>
                <p>Nosso compromisso é proporcionar experiências de viagens inesquecíveis, conectando pessoas e lugares de maneira instantânea.</p>
                <div>
                    <div className={styles.dados}>
                        <p>15</p>
                        <p>Anos de Experiência</p>
                    </div>
                    <div className={styles.dados}>
                        <p>1K</p>
                        <p>Viagens bem-sucedidas</p>
                    </div>
                    <div className={styles.dados}>
                        <p>4.9</p>
                        <p>Nota geral de avaliação</p>
                    </div>
                </div>
            </div>
        </div>
    )
}