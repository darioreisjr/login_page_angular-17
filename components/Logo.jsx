import Image from 'next/image'
import logocinza from '../src/assents/img/logocinza.png'
import Link from 'next/link';


const Logo = () => {
    return (
        <>
            <Link href="/">
                <Image
                    src={logocinza}
                    alt='logo do blog kiss'
                    width={250}
                    height={250}
                />
            </Link>

        </>
    )
}

export default Logo;