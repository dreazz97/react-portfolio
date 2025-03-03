import Grid from '@mui/material/Grid2';
import Me from '../../assets/images/me.png'
import '../../styles/home.css'
import OutlineButton from '../common/outline-button/outline-button'
import ContainedButton from '../common/contained-button/contained-button'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div id='home-container'>
      <div id='home-content-mail-container'>
        <Tooltip sx={{color: '#000'}} arrow className='home-content-mail-tooltip' title='Contact me'>
          <MailIcon sx={{ color: '#000', fontSize: '3.5rem', cursor: 'pointer', '&:hover': { color: '#333' } }} onClick={() => window.open('mailto:iuripeniche@hotmail.com', '_blank')} />
        </Tooltip>
      </div>
      <div id='home-content'>
        <Grid container spacing={{ xs: 2, md: 6 }} alignItems='center' justifyContent='center'>
          <Grid xs={12} md={6}>
            <img src={Me} alt="Eu" />
          </Grid>
          <Grid xs={12} md={6}>
            <h1 className='home-title'>Hi, my name is Iuri</h1>
            <h2 className='home-subtitle'>I'm a Self-Taught Full Stack Developer</h2>
            <p className='home-description'>Find more <span><OutlineButton height='40px' width='150px' fontSize='1rem' onClick={() => navigate('/about')} text='About Me' /></span> and <span><ContainedButton height='40px' width='150px' fontSize='1rem' onClick={() => navigate('/projects')} text='My Work' /></span></p>
            <div className='home-social-media-container'>
              <Tooltip sx={{color: '#000'}} arrow className='home-content-mail-tooltip' title='LinkedIn'>
                <LinkedInIcon sx={{ color: '#0077b5', fontSize: '3.7rem', cursor: 'pointer', '&:hover': { color: '#00447a' } }} onClick={() => window.open('https://www.linkedin.com/in/iuri-peniche/', '_blank')} />
              </Tooltip>
              <Tooltip sx={{color: '#000'}} arrow className='home-content-mail-tooltip' title='GitHub'>
                <GitHubIcon sx={{ color: '#000', fontSize: '3.5rem', cursor: 'pointer', '&:hover': { color: '#333' } }} onClick={() => window.open('https://github.com/dreazz97', '_blank')} />
              </Tooltip>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Home
