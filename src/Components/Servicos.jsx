import styles from "./Servicos.module.css"
import seta_esq from "../assets/Servicos/seta_esq.svg"
import seta_dir from "../assets/Servicos/seta_dir.svg"
import f1 from "../assets/Servicos/f1.svg"
import f2 from "../assets/Servicos/f2.svg"
import f3 from "../assets/Servicos/f3.svg"
import f4 from "../assets/Servicos/f4.svg"
import f5 from "../assets/Servicos/f5.svg"
import { Cards } from './Cards'
import { useState, useEffect, useRef } from "react";
import {motion} from 'framer-motion'
 
const images = [f1,f2,f3,f4,f5]
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

const _cards = [    
    {
        foto: f1,
        desc: "Apaixone-se pelas ruas sinuosas e paisagens cobertas de neve",
        local: "Praga, República Tcheca",
        preco: "R$500",
        duracao: "Passeio de 10 dias"
    },
    {
        foto: f2,
        desc: "Descubra o encanto das paisagens e da cultura local",
        local: "Santorini, Grécia",
        preco: "R$700",
        duracao: "Passeio de 7 dias"
    },
    {
        foto: f3,
        desc: "Aventure-se nas maravilhas naturais e arquitetônicas",
        local: "Cidade do Cabo, África do Sul",
        preco: "R$900",
        duracao: "Passeio de 14 dias"
    },
    {
        foto: f4,
        desc: "Explore a magia das ruínas antigas e das praias paradisíacas",
        local: "Tulum, México",
        preco: "R$600",
        duracao: "Passeio de 8 dias"
    },
    {
        foto: f5,
        desc: "Imersão cultural em meio à exuberante selva tropical",
        local: "Praga, República Tcheca",
        preco: "R$500",
        duracao: "Passeio de 10 dias"
    },
    {
        foto: f1,
        desc: "Apaixone-se pelas ruas sinuosas e paisagens cobertas de neve",
        local: "Praga, República Tcheca",
        preco: "R$500",
        duracao: "Passeio de 10 dias"
    },
    {
        foto: f2,
        desc: "Descubra o encanto das paisagens e da cultura local",
        local: "Santorini, Grécia",
        preco: "R$700",
        duracao: "Passeio de 7 dias"
    }
]

export function Servicos(){
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])
   
    return(
        <div>
            <div className={styles.head} id="servicos">
                <div>
                    <p>SERVIÇOS</p>
                    <h1>Viagens instantâneas para as principais cidades e pontos turísticos.</h1>
                </div>
                <div>
                    <img src={seta_esq} alt="seta esquerda" />
                    <img src={seta_dir} alt="seta direita" />
                </div>
            </div>
            <div className={styles.slideshow}>
                <motion.div ref={carousel} className={styles.carrossel} whileTap={{cursor: "grabbing"}}>
                    <motion.div className={styles.inner} drag="x" dragConstraints={{right: 0, left: -(7*rem+width)}}>
                        {_cards.map(card => (
                            <motion.div key={card.foto}>
                                <Cards
                                    foto={card.foto} 
                                    desc = {card.desc}
                                    local = {card.local}
                                    preco = {card.preco}
                                    duracao = {card.duracao}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}