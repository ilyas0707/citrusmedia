import React from "react"
import Styles from "./Services.module.css"
import Container from "./../../App.module.css"
import Monitor from "./../../assets/monitor.png"
import Web from "./../../assets/web.png"
import Bag from "./../../assets/bag.png"
import Phone from "./../../assets/smartphone.png"
import Chart from "./../../assets/chart.png"
import Chat from "./../../assets/chat.png"

const Services = () => {
    const items = [
        { id: 1, name: "Сайт-визитка", img: Monitor },
        { id: 2, name: "Корпоративный сайт", img: Web },
        { id: 3, name: "E-commerce сайт", img: Bag },
        { id: 4, name: "Мобильное приложение", img: Phone, size: Styles.size },
        { id: 5, name: "Маркетинговое сопровождение", img: Chart },
        { id: 6, name: "IT консалтинг", img: Chat },
    ]

    const elems = items.map(({id, name, img, size}) => {
        return(
            <div key={id} className={Styles.item}>
                <div className={Styles.left}>
                    <img src={img} alt={name} className={`${Styles.img} ${size}`} />
                </div>
                <div className={Styles.right}>
                    <h3 className={Styles.label}>{name}</h3>
                </div>
            </div>
        )
    })

    return(
        <div className={Styles.services} id="services">
            <div className={Container.container}>
                <h2 className={Styles.heading}>Услуги</h2>
                <div className={Styles.block}>
                    { elems }
                </div>
            </div>
        </div>
    )
}

export default Services