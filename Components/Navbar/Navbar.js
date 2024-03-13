import styles from './Navbar.module.css'
import gameimage from '../../public/console.png'
import Image from 'next/image'
const Navbar = () => {
    return(
        <div className={styles.navbar}>
        <div className={styles.navbarRight}>
        <p>
            Retrodown
        </p>
        <Image src={gameimage} alt='Gameimage'/>
        </div>
        <div className={styles.navbarLeft}>
            <button>
                Home
            </button>
            <button>
                About Me
            </button>
            <button style={styles.navbarLeftCustom}>
                Give Feedback
            </button>
        </div>
        </div>
    )
}
export default Navbar