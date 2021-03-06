import './navbar.css'
import { Router } from '../../core/router'

export class Navbar extends HTMLElement {
  constructor() {
    super()

    this.router = new Router()
    this._render()
    this._onActiveRoute(this.router.url)
  }

  _render() {
    this.innerHTML = `
      <nav class="navbar">
        <ul class="nav-content">
          <li class="nav-item">
            <a href="#/cadastro">Formulário</a>
          </li>
          <li class="nav-item">
            <a href="#/lista">Cadastros</a>
          </li>
        </ul>
      </nav>
    `
  }

  _onActiveRoute(url) {
    this.querySelectorAll('nav.navbar > ul > li > a').forEach((a) => {
      a.hash.slice(1) === url
        ? a.classList.add('active')
        : a.classList.remove('active')
    })
  }
}
