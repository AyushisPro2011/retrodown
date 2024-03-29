import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import styles from './Homepage.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../../Components/Card/Card'

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
                    <Card title={"Pokemon Firered"}/>
                </div>
            </div>
           
        </div>
    )
}
export default Homepage;
{/* {selectedcategory} */}
                    {/* <Link href={{pathname: `/Launch/Launch` , query: {title: selectedcategory}}}>
                        Hello
                    </Link> */}