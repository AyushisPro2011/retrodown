import Navbar from '../../Components/Navbar/Navbar'
import styles from './Homepage.module.css'

const Homepage = () => {
    return(
        <div className={styles.homepage}>
            <Navbar/>
            <div className={styles.homepagemain}>
            <div className={styles.homepageoptions}>
                <button>
                    GBA
                </button>
                <button>
                    GB
                </button>
                <button>
                    DS
                </button>
                <button>
                    3DS
                </button>
                <button>
                    N64
                </button>
                <button>
                    Emulators
                </button>
            </div>
            </div>
        </div>
    )
}
export default Homepage