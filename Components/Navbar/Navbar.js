import styles from './Navbar.module.css'
import gameimage from '../../public/console.png'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
const Navbar = () => {
    return(
        <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
        <p>
            Retrodown
        </p>
        <Image src={gameimage} alt='Gameimage'/>
        </div>
        <div className={styles.navbarRight}>
            <button onClick={() => {Router.push("/Homepage/Homepage")}}>
                Home
            </button>
            <button onClick={() => {window.open("https://ayushispro2011.github.io/project-showcase")}}>
                About Me
            </button>
            <button className={styles.navbarRightCustom}>
                Give Feedback
            </button>
        </div>
        </div>
    )
}
export default Navbar