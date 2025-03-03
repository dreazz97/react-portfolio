import React from 'react'
import ContainedButton from '../../common/contained-button/contained-button'
import './card.css'

export default function Card({ project }) {

    return (
        <div className='card'>
            <div className='card-container'>
                <div className='card-header'>
                    <h1 className='card-title'>{project.title}</h1>
                    <img className='card-image' src={project.image} alt='cat' />
                </div>
                <div className='card-body'>
                    <div className='card-body-description'>
                        <p>{project.description}</p>
                    </div>
                </div>
                <div className='card-links-container'>
                    {project.view !== '' && <ContainedButton fontSize='1rem' height='40px' width='100px' text='View' onClick={() => window.open(project.view, '_blank')} />}
                    {project.github !== '' && <ContainedButton fontSize='1rem' height='40px' width='100px' text='Github' onClick={() => window.open(project.github, '_blank')} />}
                </div>
                <div className='card-footer'>
                    <div className='card-footer-technologies'>
                        {project.technologies.map((technology, index) => (
                            <div key={index} className='card-footer-badge'>
                                <img src={technology.image} alt={technology.name} />
                                <p>{technology.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
