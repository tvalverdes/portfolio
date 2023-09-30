export const validateEmail = (email) => {
  if (!email) {
    return 'El correo electrónico es obligatorio.'
  } else if (!/^[^\s@!]+@[^\s@!]+\.[^\s@!]+$/.test(email)) {
    return 'El correo electrónico no es válido.'
  } else if (email.toLowerCase().includes('yopmail.com')) {
    return 'Correos temporales no permitidos.'
  } else {
    return ''
  }
}

export const validateName = (name) => {
  if (!name) {
    return 'El nombre es obligatorio.'
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    return 'No ingreses caracteres especiales ni números.'
  } else {
    return ''
  }
}
