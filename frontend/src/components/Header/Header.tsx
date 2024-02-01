import './style.scss';
import logoPng from '/assets/logo-header.jpg'
import { CiMenuBurger, CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate  = useNavigate();

    const handleClickProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
        const targetName: string | null = e.currentTarget.name;
        if (targetName === 'login') navigate('/login');
    }

    return (
        <header className="header-container">
            <img className='logo-header' src={logoPng} alt="imagem de logo header" />
            <h1 className='title-header'>Meu portifólio</h1>

            <nav className='flex_center nav-menu-end-profile'>
                <div className='hover-efect-white'>
                    <button
                        className='icon-user-profile'
                        onClick={(e) => handleClickProfile(e)}
                        name='login'
                    >
                        <CiUser size={30} />
                    </button>
                </div>

                <div className="icon-menu hover-efect-white">
                    <CiMenuBurger size={30} />
                </div>
            </nav>
        </header>
    )
}