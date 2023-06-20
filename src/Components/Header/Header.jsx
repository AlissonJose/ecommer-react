import logo from '../../assets/logo-001.png'
import styles from "./styles.css"
import { AiOutlineSearch } from "react-icons/Ai"
import { AiOutlineUser } from "react-icons/Ai"
import { BsHandbag } from "react-icons/Bs"
import { AiOutlineHeart } from "react-icons/Ai"
import brasilImg from '../../assets/Brazil.png'
export default function Header() {
    return (
        <div className="main-Header">
            <header>
                <img src={logo} className='logo' alt="Logo da marca" />
                <div className='header-wrapper'>
                    <ul className="Navbar">
                        <li>Produtos</li>
                        <li>Garantia</li>
                        <li>Envio e Devolução</li>
                        <li>Blog</li>
                        <li>Sobre</li>
                    </ul>
                    <div className="Icons">
                        <AiOutlineSearch className="icon" />
                        <AiOutlineUser className="icon" />
                        <BsHandbag className="icon" />
                        <AiOutlineHeart className="icon" />
                        <img src={brasilImg} className="icon" />
                    </div>
                </div>
            </header>

            <div className="mainContents">
                <div className="text">
                    <p className="p1">Se junte nes  sa experiência</p>
                    <h1>CRIADO PARA AQUELES QUE DESEJAM SER LIVRES</h1>
                    <p className="p2">Na ponta dos pés, o caminhar e a liberdade é nosso compromisso. Pensamos alto, desafios são constantes, a cada passo uma nova aventura.</p>
                </div>
                <div className="divButton">
                    <button className="BuyHere">Compre aqui</button>
                </div>
            </div>
        </div>
    )
}