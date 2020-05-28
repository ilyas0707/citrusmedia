import React from "react"
import Styles from "./Title.module.css"
import { BrowserRouter as Router } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'
import Arrow from "./../../assets/arrow.png"

const Title = () => {
    return(
        <div className={Styles.title} id="title">
            <h1 className={Styles.heading}>
                Вашему бизнесу нужен сайт или приложение?
            </h1>
            <div className={Styles.arrow}>
                <Router>
                    <Link to="/#about" className={Styles.link}>
                        <img src={Arrow} alt="arrow" className={Styles.img} />
                    </Link>
                </Router>
                {/* <a href="/" className={Styles.link}>
                    <img src={Arrow} alt="arrow" className={Styles.img} />
                </a> */}
            </div>
        </div>
    )
}

export default Title