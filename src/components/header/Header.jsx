import React, { useEffect, useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaChevronDown } from 'react-icons/fa'; // Importe FaChevronDown
import { linksPT, linksEN, linksFR } from '../../Data'; // Importa os dados de links para cada idioma
import { BsSun, BsMoon } from 'react-icons/bs';
import './header.css';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import shapeOne from '../../assets/shape-1.png';
import usa from '../../assets/bandeiras/usa.svg';
import france from '../../assets/bandeiras/france.svg';
import brazil from '../../assets/bandeiras/brazil.svg';
import { useTranslation } from 'react-i18next';

const getStorageTheme = () => {
    let theme = 'light-theme'; 
    return theme;
}

const Header = () => {
    const { i18n } = useTranslation();
    const [showMenu, setShowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [theme, setTheme] = useState(getStorageTheme()); 
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false); // Novo estado para o dropdown de idiomas

    // Seleciona os links de navegação conforme o idioma atual
    const linksData = i18n.language === 'fr' ? linksFR
                    : i18n.language === 'en' ? linksEN
                    : linksPT; // Padrão para português

    const scrollTop = () => {
        animateScroll.scrollToTop();
    };

    const changeNav = () => {
        setScrollNav(window.scrollY >= 80);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
        setTheme(newTheme);
    };

    const toggleLanguageDropdown = () => { // Função para alternar o dropdown
        setShowLanguageDropdown(prev => !prev);
    };

    const changeLanguageAndCloseDropdown = (lang) => { // Função para mudar idioma e fechar dropdown
        i18n.changeLanguage(lang);
        setShowLanguageDropdown(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => window.removeEventListener('scroll', changeNav);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Efeito para fechar o dropdown ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showLanguageDropdown && !event.target.closest('.language__flags')) {
                setShowLanguageDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showLanguageDropdown]);


    return (
        <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
            <nav className="nav">
                <Link to='/' onClick={scrollTop} className="nav__logo text-cs">
                    LPM
                </Link>

                <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                    <div className="nav__data">
                        <ul className="nav__list">
                            {linksData.map(({ name, path }, index) => (
                                <li className="nav__item" key={index}>
                                    <Link
                                        className='nav__link text-cs'
                                        to={path}
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        offset={-150}
                                        duration={500}
                                        onClick={() => setShowMenu(!showMenu)}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="header__socials">
                            <a href="https://www.instagram.com/lpm.ufs/" className="header__social-link">
                                <FaInstagram />
                            </a>
                            <a href="mailto:alexandre.ramos@academico.ufs.br" className="header__social-link">
                                <MdOutlineEmail />
                            </a>
                        </div>
                    </div>
                    <div className="section__deco deco__left header__deco">
                        <img src={shapeOne} alt="" className='shape' />
                    </div>
                </div>

                <div className="nav__btns">
                    {/* Novo grupo para configurações */}
                    <div className="header__settings-group"> 
                        {/* Language Dropdown */}
                        <div className="language__flags" onClick={toggleLanguageDropdown}>
                            {/* Bandeira do idioma ativo como gatilho */}
                            <img 
                                src={
                                    i18n.language === 'pt' ? brazil :
                                    i18n.language === 'en' ? usa :
                                    france
                                } 
                                alt={i18n.language === 'pt' ? 'Português' : i18n.language === 'en' ? 'English' : 'Français'} 
                                className="flag active-flag-trigger"
                            />
                            {/* Seta do dropdown */}
                            <FaChevronDown className={`dropdown-arrow ${showLanguageDropdown ? 'open' : ''}`} />

                            {/* Menu Dropdown */}
                            {showLanguageDropdown && (
                                <div className="language-dropdown-menu">
                                    {/* Apenas mostra as bandeiras que NÃO são o idioma ativo */}
                                    {i18n.language !== 'pt' && (
                                        <div className="dropdown-item" onClick={() => changeLanguageAndCloseDropdown('pt')}>
                                            <img src={brazil} alt="Português" className="flag dropdown-flag" />
                                            <span>Português</span>
                                        </div>
                                    )}
                                    {i18n.language !== 'en' && (
                                        <div className="dropdown-item" onClick={() => changeLanguageAndCloseDropdown('en')}>
                                            <img src={usa} alt="Inglês" className="flag dropdown-flag" />
                                            <span>English</span>
                                        </div>
                                    )}
                                    {i18n.language !== 'fr' && (
                                        <div className="dropdown-item" onClick={() => changeLanguageAndCloseDropdown('fr')}>
                                            <img src={france} alt="França" className="flag dropdown-flag" />
                                            <span>Français</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Theme Toggler */}
                        <div className="theme__toggler" onClick={toggleTheme}>
                            <div className={`toggle-thumb ${theme === 'dark-theme' ? 'dark-mode-active' : 'light-mode-active'}`}>
                                <BsMoon className={`theme-icon moon-icon ${theme === 'light-theme' ? 'active' : ''}`} />
                                <BsSun className={`theme-icon sun-icon ${theme === 'dark-theme' ? 'active' : ''}`} />
                            </div>
                        </div>
                    </div> {/* Fim do header__settings-group */}

                    {/* Nav Toggle */}
                    <div
                        className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;