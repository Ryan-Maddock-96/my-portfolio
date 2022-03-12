import { useState } from 'react';
import './Styles/Navigation.scss';
import {HiMenuAlt3} from 'react-icons/hi';
import {FaTimes} from 'react-icons/fa';

function Navigation(props) {

    function handleMenu() {
        const links = document.querySelector('.links');
        switch(props.navOpen) {

            case 'open':
                props.openNavMenu('closing');
                links.classList.remove('navOpen');
                                    setTimeout(() => {
                        props.openNavMenu('closed');
                    }, 1000);
                break;
                case 'closed':
                default: 
                    props.openNavMenu('open');
                                    setTimeout(() => {
                        links.classList.add('navOpen');
                    }, 300);
                    break;
        }
    }

    return (
        <nav className={props.navOpen}>
            <a href="#" className='logo'>
                <svg width="50px" height="51px" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 37.5H37V70.62L71.5 37.5M2.5 3V72H37H71.5V37.5V3L37 37.5L2.5 3Z" stroke="#C5D4E8" strokeWidth="5" strokeLinejoin="round"/>
                </svg>
            </a>
            <div className='links'>
                <a>About</a>
                <a>Work</a>
                <a>Contact</a>
            </div>
            <div className='menu' onClick={handleMenu}>
                <HiMenuAlt3 />
            </div>
            <div className='closeMenu' onClick={handleMenu}>
                <FaTimes />
            </div>
        </nav>
    );
}

export default Navigation;