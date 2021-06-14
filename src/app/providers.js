import { Navbar } from './components/navbar/navbar'
import { UserCreate } from './components/user/user-create'
import { UserList } from './components/user/user-list'

customElements.define('app-navbar', Navbar)
customElements.define('app-user-create', UserCreate)
customElements.define('app-user-list', UserList)

export default {}
