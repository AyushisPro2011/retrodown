import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import styles from './Homepage.module.css'
import Head from 'next/head'

const Homepage = () => {
    const [selectedcategory , setselectedcategory] = useState(null)
    return(
        <div className={styles.homepage}>
            <Head>
                <title>RetroDown</title>
            </Head>
            <Navbar/>
            <div className={styles.homepagemain}>
                <div className={styles.homepageoptions}>
                    <button onClick={() => {setselectedcategory("GBA")}}>GBA</button>
                    <button onClick={() => {setselectedcategory("GB")}}> GB</button>
                    <button onClick={() => {setselectedcategory("DS")}}>DS</button>
                    <button onClick={() => {setselectedcategory("3DS")}}>3DS</button>
                    <button onClick={() => {setselectedcategory("N64")}}>N64</button>
                    <button onClick={() => {setselectedcategory("Emulators")}}>Emulators</button>
                </div>
                <div className={styles.cardbox}>
                    {selectedcategory}
                </div>
            </div>
           
        </div>
    )
}
export default Homepage