import styles from "./Inicio.module.css"
import local from "../assets/inicio/local.svg"
import data from "../assets/inicio/data.svg"
import busca from "../assets/inicio/search.svg"
import hike1 from "../assets/inicio/Hike_1.svg"
import hike2 from "../assets/inicio/Hike_2.svg" 
 
export function Inicio(){
    return(
        <div className={styles.inicio} id="inicio">
            <div className={styles.infos}>
                <h1>Descubra um novo mundo com apenas um salto.</h1>
                <p>O mundo é enorme e a vida é muito curta. Transforme a forma como você viaja</p>
                <div className={styles.busca}>
                    <div className={styles.local}>
                        <img src={local} alt="" />
                        <div>
                            <p>Local</p>
                            <p>Volta Redonda</p>
                        </div>
                    </div>
                    <div className={styles.linha}></div>
                    <div className={styles.local}>
                        <img src={data} alt="" />
                        <div>
                            <p>Data</p>
                            <p>25 jun,2023</p>
                        </div>
                    </div>
                    <button><img src={busca} alt="" /></button>
                </div>
            </div>
            <div className={styles.imagens}>
                <img src= {hike1} alt="" />
            </div>
            <img className={styles.imagem2} src= {hike2} alt="" />
        </div>
    )
}