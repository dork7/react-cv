import React from 'react'
import { useUserDataSet } from '../../hooks/useUserDataSet';
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
const Socials = () => {
    const data = useUserDataSet()
    return (
        <div className='header__socials'>
            <a href={data.links.linkedin} target="_blank"><FiLinkedin /></a>
            <a href={data.links.github} target="_blank"><FiGithub /></a>
            <a href={data.links.instagram} target="_blank"><FiInstagram /></a>
        </div>
    )
}

export default Socials