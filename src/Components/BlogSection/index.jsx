/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./styles.css"
import Foto01 from "../../assets/foto-01.png"
import Foto02 from "../../assets/foto-02.png"
import Foto03 from "../../assets/foto-03.png"

function BlogCards() {
    return (
        <div className="card">
            <img src={Foto01} alt="card" />
            <img src={Foto02} alt="card" />
            <img src={Foto03} alt="card" />
        </div>
    )
}

export default BlogCards