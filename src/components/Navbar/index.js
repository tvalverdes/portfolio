import React from 'react'
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
} from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di'
import { FaBars } from 'react-icons/fa'
import { Bio } from '../../data/constants'
import { Close, CloseRounded } from '@mui/icons-material'
import { useTheme } from 'styled-components'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img
            src="/logo-tvs.png"
            alt="Logo"
            style={{
              width: '100px',
              height: '50px',
              marginRight: '10px',
            }}
          ></img>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Info</NavLink>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#experience">Experiencia</NavLink>
          <NavLink href="#projects">Proyectos</NavLink>
          <NavLink href="#education">Educación</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Info
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Habilidades
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Experiencia
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Proyectos
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Educación
            </MobileLink>
            <GitHubButton
              style={{
                padding: '10px 16px',
                background: `${theme.primary}`,
                color: 'white',
                width: 'max-content',
              }}
              href={Bio.github}
              target="_blank"
            >
              Github
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
