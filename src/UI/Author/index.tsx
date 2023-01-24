import styles from './styles.module.scss'

const Author = () => {
    return (

        <div className={styles.author} >
            <div className={styles.image}></div>
            <div className={styles.content} >
                <span className={styles.name} > Dario Reis </span>
                <span className={styles.date} > 22 de janeiro </span>
            </div>
        </div>

    )
}

export default Author;