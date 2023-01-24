import styles from './styles.module.scss'
import Link from 'next/link';

interface IError {
    text : String
}

const Error = ({ text }: IError) => {
    return (
        <div className={styles.error} >
            <h2 className='h4'>
                {text}
            </h2>
            <Link href='/' className='btn btn-primary'> Voltar para artigos</Link>
        </div>
    )
}

export default Error;