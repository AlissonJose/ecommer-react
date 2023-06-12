
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

import rectanguleshoes from '../../assets/rectangule-shoes-01.png'
import rectanguleshoes2 from '../../assets/rectangule-shoes-02.png'
import rectanguleshoes3 from '../../assets/rectangule-shoes-03.png'


export default function ShoesCard() {
  return (
    <div className="rectangule-shoes">
        <header>
                <img src={rectanguleshoes} className='rectangule-shoes' alt="Card de sapato" />
                <img src={rectanguleshoes2} className='rectangule-shoes2' alt="Card de sapato 2"></img>
                <img src={rectanguleshoes3} className='rectangule-shoes3' alt="Card de sapato 3"></img>
      </header>


    </div>

  )
}