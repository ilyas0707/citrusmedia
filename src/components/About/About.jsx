import React from "react"
import Styles from "./About.module.css"
import Container from "./../../App.module.css"
import Kadet from "./../../assets/kadet.png"
import teleOpeka from "./../../assets/teleOpeka.png"

const About = () => {
    const items = [
        { id: 1, name: "teleOpeka", url: "https://teleopeka.herokuapp.com/", img: teleOpeka },
        { id: 2, name: "Kadet", url: "https://kadet.herokuapp.com/login", img: Kadet }
    ]

    const elems = items.map(({id, name, url, img}) => {
        return(
            <div key={id} className={Styles.item}>
                <img src={img} alt={name} className={Styles.img} />
                <a href={url} target="_blank" rel="noopener noreferrer" className={Styles.label}>{name}</a>
            </div>
        )
    })

    return(
        <div className={Styles.about} id="about">
            <div className={Container.container}>
                <h2 className={Styles.heading}>О нас</h2>
                <p className={Styles.txt}>
                    <span className={Styles.colored}>Citrus Media</span> - твой лифт в большой бизнес. Наша команда занимается разработкой уже на протяжении 5 лет
                </p>
                <h3 className={Styles.subheading}>Наши проекты:</h3>
                <div className={Styles.block}>
                    { elems }
                </div>
            </div>
        </div>
    )
}

export default About