import React from "react"
import Styles from "./Whyus.module.css"
import Container from "./../../App.module.css"
import Dot from "./../../assets/citrus_bg.png"

const Whyus = () => {
    const items = [
        { id: 1, txt: "Индивидуальный подход к каждому клиенту" },
        { id: 2, txt: "Оперативная и слаженная работа целой команды над вашим проектом" },
        { id: 3, txt: "Мы используем самые последние технологии" },
        { id: 4, txt: "По максимуму сокращаем затраты на обслуживание ПО" },
        { id: 5, txt: "Качественная тех. поддержка" }
    ]

    const elems = items.map(({id, txt}) => {
        return(
            <li key={id} className={Styles.item}>
                <img src={Dot} alt={txt} className={Styles.img} />
                <p className={Styles.label}>{txt}</p>
            </li>
        )
    })

    return(
        <div className={Styles.whyus} id="whyus">
            <div className={Container.container}>
                <h2 className={Styles.heading}>Почему мы?</h2>
                <ul className={Styles.block}>
                    { elems }
                </ul>
            </div>
        </div>
    )
}

export default Whyus