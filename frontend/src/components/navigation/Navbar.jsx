import "./navbar.css";

import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined'; 

import AuthenticationModal from '../authentication/AuthenticationModal';
import LanguageSelector from "../LanguageSelector";

export default function Navbar() {
    const { t } = useTranslation();

    // Theme:
    const [actualTheme, setActualTheme] = useState(null);
    const theme = localStorage.getItem('theme');

    useEffect(() => {
        if (theme) {
            setLightMode();
            setActualTheme("light");
        } else {
            setActualTheme("dark");
        }
    }, [theme])

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.removeItem('theme');
        setActualTheme("dark");
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem('theme', 'light');
        setActualTheme("light");
    }
    //

    // Auth:
    const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);
    const showAuthentication = () => setShowAuthenticationModal(!showAuthenticationModal);
    //

    // Sidebar:
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    //

    return (
        <nav id="navbar-color"  className="flex flex-row items-center text-main-color border-bottom py-2 px-5">
            <div className="w-1/2 flex flex-row items-center justify-start gap-5">
                <NavLink to="/home"> 
                <div className="flex flex-row items-center gap-3">
                    <img className="w-12" src="./ico.png"></img>
                    <p className="font-bold text-lg text-blue-400">Go Bet</p>
                </div>
                </NavLink> 
            </div>
            <div className="w-1/2 flex flex-row items-center justify-end gap-5">
                {actualTheme == "dark" ? (
                    <button id="nav-hover" onClick={setLightMode} className="flex justify-center rounded-md w-11 p-2">
                        <DarkModeOutlinedIcon/>
                    </button>
                ) : (
                    <button id="nav-hover" onClick={setDarkMode} className="flex justify-center rounded-md w-11 p-2">
                        <LightModeOutlinedIcon/>
                    </button>
                )}
                <button id="nav-hover" onClick={showAuthentication} className="sm:flex hidden font-medium justify-center rounded-md w-20 p-2">
                    {t('navbar.signIn')}
                </button>
                <button id="nav-hover" onClick={showSidebar} className="flex justify-center rounded-md w-11 p-2">
                    <MenuIcon/>
                </button>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                    <div className='menu-bars'>
                        <div className="flex text-white justify-center p-2 rounded-md hover:bg-gray-100 hover:text-zinc-900">
                            <CloseIcon />
                        </div>
                    </div>
                    </li>
                
                    <li className="nav-text">
                        <NavLink to="/home">
                            <HomeOutlinedIcon style={{marginRight: 10}}/>
                            <p>{t('navbar.home')}</p>
                        </NavLink>
                    </li>

                    <li className="nav-text">
                        <NavLink to="/roulette">
                            <CasinoOutlinedIcon style={{marginRight: 10}}/>
                            <p>{t('navbar.roulette')}</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {}
            {showAuthenticationModal && <AuthenticationModal whatToShow={"login"} setShowAuthenticationModal={setShowAuthenticationModal} />}
        </nav>
    )
}