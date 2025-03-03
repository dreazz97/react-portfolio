import React, { useState } from 'react'
import Card from '../common/card/card'
import Grid from '@mui/material/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReplyIcon from '@mui/icons-material/Reply';
import project_tecnologies from '../../utils/Jsons/projects.json'
import '../../styles/projects.css'
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export default function Projects() {
  const navigate = useNavigate()
  const [currentProject, setCurrentProject] = useState(0)

  const maxDisplayed = 2
  const totalProjects = project_tecnologies.projects.length

  const showPrev = currentProject > 0
  const showNext = currentProject < totalProjects - maxDisplayed

  const handleNext = () => {
    const lastIndex = totalProjects - maxDisplayed
    const nextIndex = Math.min(currentProject + maxDisplayed, lastIndex)
    setCurrentProject(nextIndex)
  }

  const handlePrev = () => {
    const prevIndex = Math.max(currentProject - maxDisplayed, 0)
    setCurrentProject(prevIndex)
  }

  const displayedProjects = project_tecnologies.projects.slice(currentProject, currentProject + maxDisplayed)

  return (
    <div id='projects-container'>
      <div id='projects-content'>
        <div id='projects-title-container'>
          <div id='projects-title-container-text'>
            <h1>PROJECTS</h1>
          </div>
        </div>
        <div id='back-main-container'>
          <div id='go-back-button-container'>
            <Tooltip sx={{color: '#000'}} arrow className='home-content-mail-tooltip' title='Go back'>
              <ReplyIcon
                sx={{ color: '#000', fontSize: '3.5rem', cursor: 'pointer', '&:hover': { color: '#333' } }}
                onClick={() => navigate('/')}
              />
            </Tooltip>
          </div>
        </div>
        <Grid container spacing={{ xs: 2, md: 8 }} alignItems='center' justifyContent='center'>
          <ArrowBackIcon
            sx={{ color: showPrev ? '#000' : 'gray', fontSize: '3.5rem', cursor: showPrev ? 'pointer' : 'default', '&:hover': { color: showPrev ? '#333' : '' } }}
            onClick={showPrev ? handlePrev : null}
          />
          {displayedProjects.map((project, index) => (
            <Grid xs={12} md={6} key={currentProject + index}>
              <Card project={project} />
            </Grid>
          ))}
          <ArrowForwardIcon
            sx={{ color: showNext ? '#000' : 'gray', fontSize: '3.5rem', cursor: showNext ? 'pointer' : 'default', '&:hover': { color: showNext ? '#333' : '' } }}
            onClick={showNext ? handleNext : null}
          />
        </Grid>
      </div>
    </div>
  )
}
