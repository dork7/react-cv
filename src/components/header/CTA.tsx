import React from 'react'
import { useUserDataSet } from '../../hooks/useUserDataSet';

const CTA = () => {
    const data = useUserDataSet()

    return (
        <div className='cta'>
            <a href={data.resumeLink} className="btn">Downlaod CV</a>
            <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
    )
}

export default CTA  