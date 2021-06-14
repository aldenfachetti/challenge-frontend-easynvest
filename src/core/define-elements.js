import { Navbar } from '../components/navbar/navbar'
import { UserCreate } from '../components/user/user-create/user-create'
import { UserList } from '../components/user/user-list/user-list'
import { UserDeleteButton } from '../components/user/user-list/buttons/user-delete'
import { UserEditButton } from '../components/user/user-list/buttons/user-edit'

customElements.define('app-navbar', Navbar)
customElements.define('app-user-create', UserCreate)
customElements.define('app-user-list', UserList)
customElements.define('app-user-delete-button', UserDeleteButton)
customElements.define('app-user-edit-button', UserEditButton)
