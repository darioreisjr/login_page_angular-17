import Author from "@/UI/Author"
import styles from '@/styles/post.module.scss'

const Post = () => {
    return (
        <section className={styles.post} >
            <div className={styles.heading} >
                <h1>Titulo do artigo</h1>
                <p>aqui vai ser o subtitulo do artigo</p>
                <Author />
            </div>
            <article className={styles.content} >
                <div className={styles.image} ></div>
                conteúdo do artigo
            </article>

        </section>
    )
}

export default Post