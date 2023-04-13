import React, { useState } from 'react'
import './styles.css'
import { BiHomeAlt, BiUserCircle, BiBookAlt, BiMessageDots } from 'react-icons/bi'
import { AiOutlineProject } from 'react-icons/ai'
const Nav = () => {
    const [activeLink, setActiveLink] = useState("")

    return (
        <nav>
            <a className={activeLink === "#" ? "active" : ""} href="#" onClick={() => setActiveLink("#")}><BiHomeAlt /></a>
            <a className={activeLink === "about" ? "active" : ""} href="#about" onClick={() => setActiveLink("about")}><BiUserCircle /></a>
            <a className={activeLink === "experience" ? "active" : ""} href="#experience" onClick={() => setActiveLink("experience")}> <BiBookAlt /></a>
            <a className={activeLink === "projects" ? "active" : ""} href="#projects" onClick={() => setActiveLink("projects")}><AiOutlineProject /></a>
            <a className={activeLink === "contact" ? "active" : ""} href="#contact" onClick={() => setActiveLink("contact")}><BiMessageDots /></a>
        </nav>
    )
}

export default Nav