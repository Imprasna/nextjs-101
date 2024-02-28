"use client"
import React, { useRef } from 'react';
import MainLogo from '@/components/icons/MainLogo';
import Menu from '@/components/menu-components/Menu';
import gsap from 'gsap';

const Header = () => {
    const logoRef = useRef(null);

    const onLogoEnter = () => {
        const currentColor = logoRef.current.getAttribute('data-color');
        const logoSVG = logoRef.current.firstChild.firstChild;

        const nextColor = currentColor === "#a6e2e3" ? "#8566f6" : currentColor === "#8566f6" ? "#ed7c50" : "#a6e2e3";
        
        logoRef.current.setAttribute('data-color',nextColor);
        gsap.to(logoSVG, {
            fill: currentColor,
            duration: 0.2,
            ease: 'power1.out',
        })
    };

    const onLogoLeave = () => {
        const logoSVG = logoRef.current.firstChild.firstChild;

        gsap.to(logoSVG, {
            fill: '#282829',
            duration: 0.2,
            ease: 'power1.out',
        });
    };

  return (
    <div className='header min-w-screen fixed left-0 top-0 z-10 w-screen px-7 transition-all duration-500 ease-out'>
        <div className='overflow-hidden bg-none'>
            <div className='header_container flex items-center justify-between transition-all duration-500 ease-out will-change-transform lg:py-8'>
                <Menu>Menu</Menu>
                <div className='header_logo pointer-event-auto cursor-pointer leading-none transition-height [&>svg]:h-10 [&>svg]:duration-500 [&>svg]:ease-out lg:[&>svg]:h-16'
                    data-color="#a6e2e3" 
                    ref={logoRef}
                    onMouseEnter={onLogoEnter}
                    onMouseLeave={onLogoLeave}
                >
                    <MainLogo />
                </div>
                <Menu>Contact</Menu>
            </div>
        </div>
    </div>
  )
}

export default Header