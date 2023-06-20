/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'
import shoes01 from '../../assets/01-shoes 1.png'
import shoes02 from '../../assets/02-shoes 1.png'
import shoes03 from '../../assets/03-shoes 1.png'
import shoes04 from '../../assets/04-shoes 1.png'

export default function Cards() {
    return (
        <div className="container">
            <div className="text-shoes-card">
                <p className='title'>Melhores compras</p>
                <p className="subtitle">Uma diferença que você pode sentir em sua sola</p>
                <p className="description">Nossa variedade de calçados, torna a experiência de nossos clientes cada vez melhor. A nossa linha de esportes, corridas e treinos foram preparados exclusivamente para um toque perfeito.</p>
            </div>
            <div className='bloco-wrapper'>
                <div className="bloco1">
                    <div className="circulo1">Promoções!</div>
                    <img src={shoes01} alt="sapato01" />
                    <button>COMPRAR</button>
                    <div className='text'>
                        <p className='first'>FS 07 Sports Unisexx</p>
                        <p className='second'>R$ 359,90 <span>por R$ 300,00 reais</span></p>
                    </div>
                </div>
                <div className="bloco1">
                    <div className="circulo1">Promoções!</div>
                    <img src={shoes02} alt="sapato 2" />
                    <button>COMPRAR</button>
                    <div className='text'>
                        <p className='first'>AIR JORDAN 12 GYM RED</p>
                        <p className='second'>R$ 899,00 reais</p>
                    </div>
                </div>
                <div className="bloco1">
                    <div className="circulo1">Promoções!</div>
                    <img src={shoes03} alt="sapato 3" />
                    <button>COMPRAR</button>
                    <div className='text'>
                        <p className='first'>K-SWISS - Flex Run</p>
                        <p className='second'>R$ 300,00 <span>por R$ 260,00 reais</span></p>
                    </div>
                </div>
                <div className="bloco1">
                    <div className="circulo1">Promoções!</div>
                    <img src={shoes04} alt="sapato 4" />
                    <button>COMPRAR</button>
                    <div className='text'>
                        <p className='first'>VANS OLD School - Red</p>
                        <p className='second'>R$ 499,00 <span>por R$ 399,00 reais</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
