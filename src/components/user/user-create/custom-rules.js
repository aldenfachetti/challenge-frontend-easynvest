export const customRules = {
  name: (value) => {
    const regExp = /^[a-zA-Z ]{2,30}$/
    if (!regExp.test(value)) {
      return {
        isInvalid: true,
        message: 'Nome inválido'
      }
    }
    if (value.length < 3) {
      return {
        isInvalid: true,
        message: 'O nome deve ter 3 caracteres ou mais'
      }
    }
    return {}
  },
  email: (value) => {
    // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const regExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regExp.test(value)) {
      return {
        isInvalid: true,
        message: 'Email inválido'
      }
    }
    return {}
  },
  cpf: (value) => {
    // /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
    const regExp = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    if (!regExp.test(value)) {
      return {
        isInvalid: true,
        message: 'CPF inválido'
      }
    }
    return {}
  },
  phone: (value) => {
    // const regExp = /^(\d{2})\D*(\d{5}|\d{4})\D*(\d{4})$/
    const regExp = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/
    if (!regExp.test(value)) {
      return {
        isInvalid: true,
        message: 'Telefone inválido'
      }
    }
    return {}
  }
}
