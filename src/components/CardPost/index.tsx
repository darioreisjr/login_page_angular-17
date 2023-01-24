import Author from '@/UI/Author';
import Link from 'next/link';
import styles from './styles.module.scss'



const CardPost = () => {
    

    return (

        <div className={styles.post}>
            <div className={styles.image}>
                
            </div>
            <div className={styles.content} >
                <h2 className='h3' >Titulo</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic inventore nemo consequuntur, at molestiae? Deserunt atque ex voluptates quos dicta necessitatibus deleniti beatae, nihil cumque quas, quasi asperiores enim?
                </p>
                <div className={styles.footer}>

                    <Author />

                    <Link href={`/post/novo-artigo`} className="h5" >
                        Continuar lendo &rarr;
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default CardPost;