import styles from "./Cards.module.css"

export function Cards({foto, desc, local, preco, duracao, className}){
    const cardClasses = `${styles.card} ${className || ''}`;
    return(
        <div className={cardClasses}>
            <img src={foto} alt="foto"/>
            <div className={styles.infos}>
                <h1>{desc}</h1>
                <p>{local}</p>
                <div>
                    <h1>{preco}</h1>
                    <p>{duracao}</p>
                </div>
            </div>
        </div>
    )
    
}