import React from "react"
import Styles from "./Footer.module.css"
import { BrowserRouter as Router } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'
import Container from "./../../App.module.css"
import Citrus from "./../../assets/citrus.png"
import Mail from "./../../assets/mail.svg"
import Phone from "./../../assets/phone.svg"
import Whatsapp from "./../../assets/whatsapp.svg"
import Instagram from "./../../assets/instagram.svg"

const Footer = () => {
    const items = [
        { id: 1, name: "mail", target: "", url: "mailto:citrus.media.kg@gmail.com", img: Mail },
        { id: 2, name: "phone", target: "", url: "tel:+996709911300", img: Phone },
        { id: 3, name: "whatsapp", target: "_blank", url: "https://api.whatsapp.com/send?phone=996709911300", img: Whatsapp },
        { id: 4, name: "instagram", target: "_blank", url: "https://www.instagram.com/citrus_media/?hl=ru", img: Instagram },
    ]

    const elems = items.map(({id, name, target, url, img}) => {
        return(
            <div key={id} className={Styles.item}>
                <a href={url} target={target} rel="noopener noreferrer" className={Styles.label}>
                    <img src={img} alt={name} className={Styles.icon} />
                </a>
            </div>
        )
    })

    return(
        <div className={Styles.footer} id="contacts">
            <div className={Container.container}>
                <div className={Styles.block}>
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
                    <div className={Styles.social}>
                        { elems }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer