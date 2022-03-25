import checkEmail from "./checkEmail"

export const validateInput = async (e) => {
  const { type, name, value } = e.target

  if (!e.target.required) return

  e.target.classList.remove('valid', 'invalid')

  switch (type) {
    case 'text':
      if (value === '' || value.length > 1000) e.target.classList.add('invalid')
      break;
    case 'number':
      if (value === '' || value.length > 10000000) e.target.classList.add('invalid')
      break;
    case 'email':
      if (!checkEmail(value)) e.target.classList.add('invalid')
      break;
    case 'password':
      if (value === '' || value.length > 100) e.target.classList.add('invalid')
      break;
    default:
    // TBD...
  }

  e.target.classList.add('valid')
}


export const validateTextarea = async (e) => {
  const { name, value } = e.target

  if (!e.target.required) return

  e.target.classList.remove('valid', 'invalid')

  if (value === '' || value.length > 10000000) {
    e.target.classList.add('invalid')
    return
  }
  e.target.classList.add('valid')
}
