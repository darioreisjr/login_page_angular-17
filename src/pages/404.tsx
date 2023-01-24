import Error from '@/UI/Error';
import styles from './../styles/custom404.module.scss'

const Custom404 = () => {
    return (
        <section className={styles.section} >
            <h1> Oops!!! Error 404</h1>
            <Error text='A Página que você está tentando acessar não existe.' />
        </section>
    )
}

export default Custom404;