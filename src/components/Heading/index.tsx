import styles from './styles.module.scss'
import {BiSearchAlt} from 'react-icons/bi'
import Logo from '@/UI/Logo';

const Heading = () => {
    return (
        <section className={styles.heading} >
            <Logo/>
            <div className={styles.search} >
                <form>
                    <label htmlFor="search">buscar</label>
                    <input type="text" name='search' id='search' placeholder='Buscar Artigo' />
                    <button className={styles.button} >
                        <BiSearchAlt/>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Heading;