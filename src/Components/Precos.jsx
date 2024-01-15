import styles from './Precos.module.css';
import { Cards } from './Cards';
import f1 from "../assets/Precos/londres.svg"
import f2 from "../assets/Precos/roma.svg"
import f3 from "../assets/Precos/madri.svg"
import f4 from "../assets/Precos/paris.svg"

/*const _cards = [    
    {
        foto: f1,
        desc: "Londres, Inglaterra",
        local: "",
        preco: "R$500",
        duracao: "5 dias"
    },
    {
        foto: f2,
        desc: "Paris, França",
        local: "",
        preco: "R$720",
        duracao: "8 dias"
    },
    {
        foto: f3,
        desc: "Roma, Itália",
        local: "",
        preco: "R$650",
        duracao: "10 dias"
    },
    {
        foto: f4,
        desc: "Madri, Espanha",
        local: "",
        preco: "R$500",
        duracao: "7 dias"
    },
]*/
export function Precos(){
    return(
        <div className={styles.precos} id='precos'>
            <h1>Descubra um mundo sem fronteiras.</h1>
            <h1>Seu próximo destino está a um</h1>
            <h1>teleporte distância.</h1>
            <div className={styles.upper}>
                <Cards
                    foto= {f1}
                    desc= "Londres, Inglaterra"
                    local= ""
                    preco= "R$500"
                    duracao= "5 dias"
                    className={styles.customCards}
                />
                <div className={styles.centro}>
                    <p>Seja ousado. Seja destemido. Seja teletransportado.</p>
                    <button>TP</button>
                    <div className={styles.lower}>
                        <Cards
                            foto= {f2}
                            desc= "Roma, Itália"
                            local= ""
                            preco= "R$650"
                            duracao= "10 dias"
                            className={styles.customCards}
                        />
                        <Cards
                            foto= {f3}
                            desc= "Madri, Espanha"
                            local= ""
                            preco= "R$500"
                            duracao= "7 dias"
                            className={styles.customCards}
                        />
                    </div>
                </div>
                <Cards
                    foto= {f4}
                    desc= "Paris, França"
                    local= ""
                    preco= "R$720"
                    duracao= "8 dias"
                    className={styles.customCards}
                    />
            </div>
        </div>
    )
}