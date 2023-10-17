import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import ReCAPTCHA from 'react-google-recaptcha'
import { validateEmail, validateName } from '../../utils/error.handler'
import zIndex from '@mui/material/styles/zIndex'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid
    ${(props) =>
      props.error ? '#E80700' : ({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid
      ${(props) => (props.error ? '#E80700' : ({ theme }) => theme.primary)};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`

const ErrorText = styled.p`
  color: #e80700;
  font-size: 14px;
`

const Contact = () => {
  const [open, setOpen] = React.useState(false)
  const [captcha, setCaptcha] = React.useState(false)
  const [userEmail, setUserEmail] = React.useState('')
  const [userName, setUserName] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [nameError, setNameError] = React.useState('')
  const form = useRef()

  const onChange = (value) => {
    console.log('Captcha value:', value)
    setCaptcha(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captcha || emailError || nameError) {
      setOpen(true)
    } else {
      /* emailjs
        .sendForm(
          'service_ejf7g0n',
          'template_arpow6g',
          form.current,
          'AVGhbnqvCEDeANUxO'
        )
        .then(
          (result) => {
            setOpen(true)
            setUserName('')
            setUserEmail('')
            form.current.reset()
          },
          (error) => {
            console.log(error.text)
          }
        ) */
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Contacto</Title>
        <Desc>¡Ponte en contacto conmigo!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Mándame un correo 🚀</ContactTitle>
          <ContactInput
            type="email"
            placeholder="Tu Correo"
            name="user_email"
            value={userEmail}
            error={emailError}
            onChange={(e) => {
              setUserEmail(e.target.value)
              setEmailError(validateEmail(e.target.value))
            }}
          />
          <ErrorText>{emailError}</ErrorText>
          <ContactInput
            placeholder="Tu Nombre"
            name="user_name"
            value={userName}
            error={nameError}
            onChange={(e) => {
              setUserName(e.target.value)
              setNameError(validateName(e.target.value))
            }}
          />
          <ErrorText>{nameError}</ErrorText>
          <ContactInput placeholder="Asunto" name="subject" />
          <ContactInputMessage placeholder="Mensaje" rows="3" name="message" />
          <ReCAPTCHA
            sitekey="6Le-5GMoAAAAADB2UbNYhViAV1Uz1L0aWRlQT3dy"
            onChange={onChange}
          />
          <ContactButton type="submit" value="Enviar" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        >
          <Alert severity={captcha ? 'success' : 'error'}>
            {captcha
              ? 'Email enviado correctamente!'
              : 'Confirma que no eres un robot o completa los campos correctamente.'}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  )
}

export default Contact
