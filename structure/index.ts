import {singletons} from './singletons'
import {pages} from './pages'
import {projects} from './projects'
import {users} from './users'

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([...singletons(S), S.divider(), ...pages(S), ...projects(S), ...users(S)])
