import React from 'react'
import './styles.css'
import me from '../../assets/avatar.jpeg'
import { useUserDataSet } from '../../hooks/useUserDataSet'
import { BiAward } from 'react-icons/bi'
import { AiOutlineProject } from 'react-icons/ai'
const About = () => {
  const data = useUserDataSet()

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={me} alt="myimg" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className='about__icon' />
              <h5>Experience</h5>
              <small>{data.exp}</small>
            </article>
            <article className="about__card">
              <AiOutlineProject className='about__icon' />
              <h5>Projects</h5>
              <small>{data.project_count}</small>
            </article>
            <article className="about__card">
              <BiAward className='about__icon' />
              <h5>Experience</h5>
              <small>{data.exp}</small>
            </article>

          </div>

          <p>
            {data.aboutMe}
          </p>

          <button className="btn btn-primary">
            Let talk!
          </button>
        </div>




      </div>
    </section>
  )
}

export default About