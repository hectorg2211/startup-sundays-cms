import {AddDocumentIcon, UserIcon} from '@sanity/icons'

export const users = (S) => [
  S.documentTypeListItem('registration').title('Registrations').icon(AddDocumentIcon),
  S.documentTypeListItem('user').title('Users').icon(UserIcon),
]
