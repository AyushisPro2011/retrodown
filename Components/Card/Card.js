import styles from './Card.module.css'
import Link from 'next/link'

const Card = ({title , img}) => {
    return(
        <Link href={"/Launch/Launch"} className={styles.link}>
        <div className={styles.card} >
            <img src={img}/>
            <h1>{title}</h1>
        </div>
        </Link>
    )
}
export default Card