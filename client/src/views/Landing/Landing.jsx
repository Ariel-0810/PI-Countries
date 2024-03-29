import styles from "./Landing.module.css"
import { Link } from "react-router-dom"


const Landing = () => {
    return (
        <div className={styles.landingContainer} >
            <div className={styles.mapa}>
                <img src="../../img/mapa2.png" alt=""></img>
            </div>
            
            <h1 className={styles.titleLanding}>PI Henry Countries</h1>
            
            
            <Link to="/home">
                <button className={styles.buttonLanding} >Let's go to travel</button> 
            </Link>

            <footer className={styles.footer}>
                <p>By Gomez Ariel for Henry - Copryrigth 2023</p> 
      
            </footer>
        </div>
    )
}

export default Landing