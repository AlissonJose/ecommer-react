/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./styles.css"


function Section2() {
    return (
        <div className="main-section">
            <div className='text'>
                <p className='title'>Promoção em destaque</p>
                <p className='offer'>60% em PROMOÇÃO!</p>
                <p className='description'>Aproveite nossos descontos progressivos direto da fábrica. Além de 
                <span>frete grátis</span> nas compras 
                <span>acima de R$600,00</span>
                </p>
                <button className="BuyHere2">Compre Aqui</button>
            </div>

            <div className="second-section">
                <div className='text-second'>
                    <p className='title-second'>OFERTAS</p>
                    <p className='description-second'>10% de Desconto em sua primeira compra</p>
                    <p className='third-section'>Assine e receba atualizações, promoções e dicas</p>
                    <button className="email-subscribe">Seu melhor e-mail</button>
                    
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Section2