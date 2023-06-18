/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./styles.css"
import Foto01 from "../../assets/foto-01.png"
import Foto02 from "../../assets/foto-02.png"
import Foto03 from "../../assets/foto-03.png"

function BlogCards() {
    return (
        <div className="card-1">
            <img src={Foto01} alt="card 01" />
            <img src={Foto02} alt="card 02" />
            <img src={Foto03} alt="card 03" />


        </div>
    )
}

export default BlogCards