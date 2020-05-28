import React, { useState } from "react"
import Styles from "./Navbar.module.css"
import { BrowserRouter as Router } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'
import Container from "./../../App.module.css"
import Citrus from "./../../assets/citrus.png"

const Navbar = () => {
    const [opened, setOpened] = useState(false)

    const menuOpen = () => {
        if (opened === false) {
            setOpened(true)
        } else {
            setOpened(false)
        }
    }

    const items = [
        { id: 1, name: "О нас", url: "/#about" },
        { id: 2, name: "Услуги", url: "/#services" },
        { id: 3, name: "Почему мы?", url: "/#whyus" },
        { id: 4, name: "Контакты", url: "/#contacts" }
    ]

    const elems = items.map(({id, name, url}) => {
        return <li key={id} className={`${Styles.item} ${opened ? Styles.opened : ""}`}>
            <Link to={url} className={Styles.navlink} onClick={menuOpen}>{name}</Link>
            {/* <a href={url} className={Styles.navlink}>{name}</a> */}
        </li>
    })

    return(
        <div className={Styles.navbar}>
            <div className={Container.container}>
                <div className={Styles.flexBlock}>
                    <div className={Styles.logo}>
                        <Router>
                            <Link to="/#title" className={Styles.link}>
                                <img src={Citrus} alt="Citrus" className={Styles.img} />
                                Citrus <br/> Media
                            </Link>
                        </Router>
                        {/* <a href="/" className={Styles.link}>
                            <img src={Citrus} alt="Citrus" className={Styles.img} />
                            Citrus <br/> Media
                        </a> */}
                    </div>
                    <ul className={`${Styles.menu} ${opened ? Styles.opened : ""}`}>
                        <Router>
                            {elems}
                        </Router>
                    </ul>
                    <div className={Styles.hamburger} onClick={menuOpen}>
                        <span className={`${Styles.line} ${opened ? Styles.opened : ""}`}></span>
                        <span className={`${Styles.line} ${opened ? Styles.opened : ""}`}></span>
                        <span className={`${Styles.line} ${opened ? Styles.opened : ""}`}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar