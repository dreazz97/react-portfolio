import React from 'react'
import '../../styles/about.css'
import Grid from '@mui/material/Grid2'
import Me2 from '../../assets/images/eu2.png'
import Badges from '../common/badges/badges'
import skills from '../../utils/Jsons/badges.json'
import ContainedButton from '../common/contained-button/contained-button'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ReplyIcon from '@mui/icons-material/Reply';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';

export default function About() {

    const navigate = useNavigate()
    const [showSkills, setShowSkills] = useState(false)

    return (
        <div id='about-container'>
            <div id='about-content'>
                <Grid container spacing={{ xs: 2, md: 8 }} alignItems='center' justifyContent='center'>
                    <Grid xs={12} md={6}>
                        <div id='about-content-text'>
                            <div id='go-back-button-container'>
                                <Tooltip placement='left' sx={{color: '#000'}} arrow className='home-content-mail-tooltip' title='Go back'>
                                    <ReplyIcon sx={{
                                        '&:hover': { color: '#333' },
                                        cursor: 'pointer',
                                        fontSize: '2.5rem'
                                    }} onClick={() => navigate('/')} />
                                </Tooltip>
                            </div>
                            {!showSkills &&
                                <>
                                    <h1>ABOUT ME</h1>
                                    <p className='about-content-text-paragraph'>My name is Iuri and I am from Portugal. As a kid I always loved computers so later on I decided to study eletronics in a vocational school in Almada, Portugal. Then I worked a few years in the eletronics field as a technician and then switched into an IT position (current) as a full-stack developer and dev-ops. I am also around the cloudnative environment and open-source community.</p>
                                    <ContainedButton fontSize='1rem' height='40px' width='150px' text='Show Skills' onClick={() => setShowSkills(true)} />
                                </>
                            }

                            {showSkills && (
                                <>
                                    <h1 id='skills-title'>SKILLS</h1>
                                    <h3>Frontend</h3>
                                    <div className='badges-container'>
                                        <Badges imageArrayList={skills.frontend_skills[0].skills.map(skill => skill.image)} badgeArrayList={skills.frontend_skills[0].skills.map(skill => skill.name)} />
                                    </div>
                                    <h3>Backend</h3>
                                    <div className='badges-container'>
                                        <Badges imageArrayList={skills.backend_skills[0].skills.map(skill => skill.image)} badgeArrayList={skills.backend_skills[0].skills.map(skill => skill.name)} />
                                    </div>
                                    <h3>DevOps</h3>
                                    <div className='badges-container'>
                                        <Badges imageArrayList={skills.devops_skills[0].skills.map(skill => skill.image)} badgeArrayList={skills.devops_skills[0].skills.map(skill => skill.name)} />
                                    </div>
                                    <div className='button-container'>
                                        <ContainedButton image={<KeyboardBackspaceIcon />} height='40px' fontSize='1rem' text='Show About Me' onClick={() => setShowSkills(false)} />
                                    </div>
                                </>
                            )}

                        </div>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <img id='about-content-image' src={Me2} alt='Me' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
