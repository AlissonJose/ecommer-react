// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import './styles.css'
import shoes01 from '../../assets/01-shoes 1.png'

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
           </div>
        </div>
    )
}
