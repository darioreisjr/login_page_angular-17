import Logo from '@/UI/Logo';
import styles from './styles.module.scss'
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsTelegram } from 'react-icons/bs';

const social = [
    {component: <AiFillInstagram/>, Url:'#'},
    {component: <IoLogoWhatsapp/>, Url:'#'},
    {component: <MdEmail/>, Url:'#'},
    {component: <BsTelegram/>, Url:'#'},
]

const Footer = () => {
    const renderSocial = social.map((item,index)=>(
        <a href={item.Url} key={index}>
            {item.component}
        </a>
    ))
    return (
        <footer className={styles['footer-wrapper']} >
            <div className={styles.footer}>
                <div className={styles.content}>
                    <Logo />
                    <p>Compartilhando Noticia do universo do pagode Baiano.</p>
                    <div className={styles.social}>
                        {renderSocial}
                    </div>
                </div>
                <span className={styles.copy}>&copy; Blog Kiss - Todos os direitos reservados.</span>
            </div>
        </footer>
    )
}

export default Footer;