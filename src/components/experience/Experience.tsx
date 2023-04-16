import React from 'react'
import './styles.css'
import { BsPatchCheckFill } from "react-icons/bs"
import { useUserDataSet } from '../../hooks/useUserDataSet'
const Experience = () => {
    const data = useUserDataSet()

    return (
        <section id="experience">

            <h5>
                What skills I have
            </h5>
            <h2>
                My Skills
            </h2>
            <div className="container experience__container">
                <div className="experience__card">
                    <div className="expereince__content">
                        {
                            data.skills.map(item => {
                                return (< article className="experience__details" >
                                    <BsPatchCheckFill />
                                    <small className='text-light'>
                                        {item}
                                    </small>
                                </article>)
                            })
                        }

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Experience