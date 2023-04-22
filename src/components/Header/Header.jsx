import './style.scss';
import logoPng from '../../assets/logo-header.jpg'
import imgMenu from '../../assets/menu.svg'

export default function Home() {
    return (
        <div className="header-container">
            <img className='logo-header' src={logoPng} alt="imagem de logo header" />
            <h1 className='title-header'>Meu portifólio</h1>
            <div className="icon-menu hover-efect-white">
                <img src={imgMenu} alt="" />
            </div>
        </div>
    )
}