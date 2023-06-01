import logo from '../../assets/logo-001.png'
import "./styles.css"
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
                <div className="Navbar">
                    <span>Produtos</span>
                    <span>Garantia</span>
                    <span>Envio e Devolução</span>
                    <span>Blog</span>
                    <span>Sobre</span>
                </div>
                <div className="Icons">
                    <AiOutlineSearch className="icon" />
                    <AiOutlineUser className="icon" />
                    <BsHandbag className="icon" />
                    <AiOutlineHeart className="icon" />
                    <img src={brasilImg} className="icon" />
                </div>

            </header>
        </div>
    )
}