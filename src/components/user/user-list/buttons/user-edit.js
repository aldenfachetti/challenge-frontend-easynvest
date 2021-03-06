import { UserService } from '../../services/user.service'

export class UserEditButton extends HTMLElement {
  constructor() {
    super()
    this.userService = new UserService()
  }

  attributeChangedCallback(name, oldV, newV) {
    this._key = newV
    this._render()
  }

  static get observedAttributes() {
    return ['data-key']
  }

  get key() {
    return this._key
  }

  set key(key) {
    this.setAttribute('data-key', key)
  }

  _onEditUser() {
    console.log('Not implemented yet')
    // await this.userService.update(this.key)

    // const event = new Event('render')
    // document.querySelector('app-user-edit-button').dispatchEvent(event)
  }

  _render() {
    const button = document.createElement('button')

    button.className = 'btn btn-primary'
    button.innerText = 'Editar'
    button.disabled = true
    button.addEventListener('click', () => {
      this._onEditUser()
    })

    this.appendChild(button)
  }
}
