import './app.css'
import { Router } from './router'

export class App {
  constructor() {
    this.router = new Router()
    this.app = document.createElement('div')
    document.querySelector('body').appendChild(this.app)
  }

  render() {
    const path = this.router.path

    if (path) {
      this.app.innerHTML = `
        <app-navbar></app-navbar>
        <${path.component}></${path.component}>
      `
    } else {
      this.router.navigate('/cadastro')
    }
  }
}
