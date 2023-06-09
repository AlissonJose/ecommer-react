/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import './styles.css'
import shoes01 from '../../assets/01-shoes 1.png'
import shoes02 from '../../assets/02-shoes 1.png'
import shoes03 from '../../assets/03-shoes 1.png'
import shoes04 from '../../assets/04-shoes 1.png'

export default function Cards() {
    return (
        <div className='container'>
            <div className="bloco1">
                <div className="circulo1">Promoções!</div>
                <div className="shoes1"><img src={shoes01} alt="sapato01" /></div>
            </div>
            <div className="bloco1">
                <div className="circulo1">Promoções!</div>
            </div>
            <div className="bloco1">
                <div className="circulo1">Promoções!</div>
            </div>
            <div className="bloco1">
                <div className="circulo1">Promoções!</div>
            <div className="shoes2"><img src={shoes02} alt="sapato 2" /></div>
            <div className="shoes3"><img src={shoes03} alt="sapato 3" /></div>
            <div className="shoes4"><img src={shoes04} alt="sapato 4" /></div>
           </div>
        </div>
    )
}
