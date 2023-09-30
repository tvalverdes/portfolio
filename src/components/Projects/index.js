import React from 'react'
import { useState } from 'react'
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all')
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Proyectos</Title>
        <Desc>
          He trabajado en proyectos de desarrollo web y de escritorio. Aquí hay
          algunos.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>
              TODOS
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              TODOS
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'web app' ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle('web app')}
            >
              WEB
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>
              WEB
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'desktop app' ? (
            <ToggleButton
              active
              value="desktop app"
              onClick={() => setToggle('desktop app')}
            >
              ESCRITORIO
            </ToggleButton>
          ) : (
            <ToggleButton
              value="desktop app"
              onClick={() => setToggle('desktop app')}
            >
              ESCRITORIO
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard
                key={project}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
