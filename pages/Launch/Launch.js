import styles from './Launch.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Router, { useRouter } from 'next/router';


const LaunchPage = () => {
    const router = useRouter();
    const title = router.query.title
    return(
        <div className={styles.launchpage}>
        <Navbar/>
        <div className={styles.launchpagemain}>
            <div className={styles.pageupper}>
            <div className={styles.pageupperimagecontainer}>
            <img alt='yay' src='yay.png'/>
            </div>
            <div className={styles.pageupperright}>
                <h1>{title}</h1>
                    <button>Download Game</button>
                    <button>Download Emulator</button>
            </div>
            </div>
            <div className={styles.pagedown}>
                Game description
            </div>
        </div>
        </div>
    )
}

export default LaunchPage