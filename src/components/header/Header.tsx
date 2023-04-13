import React from 'react'
import './styles.css'
import { useUserDataSet } from '../../hooks/useUserDataSet';
import CTA from './CTA';
import me from '../../assets/avatar.jpeg'
import Socials from './Socials';
const Header = () => {
    const data = useUserDataSet()
    return (
        <header>
            <div className="container header__container">

                <div className="intro">
                    <h5 className='name'>Hello I'm</h5>
                    <h1 className='name'>{data.name}</h1>
                    <h5 className="text-light">{data.shortDescp}</h5>
                </div>
                <CTA />

                <a href="#contact" className='scroll__down'>Scroll Down</a>
                <Socials />

            </div>
        </header>
    )
}

export default Header