import {BookIcon, CogIcon, DashboardIcon, HomeIcon} from '@sanity/icons'

export const singletons = (S) => [
  S.listItem()
    .title('Settings')
    .id('settings')
    .icon(CogIcon)
    .child(S.document().schemaType('settings').documentId('9ec10309-1088-40fc-a3e3-110372977222')),

  S.listItem()
    .title('Layout')
    .icon(DashboardIcon)
    .id('layout')
    .child(S.document().schemaType('layout').documentId('97a29825-3038-4d13-af3c-079d997e4f0e')),

  S.listItem()
    .title('Home')
    .icon(HomeIcon)
    .id('home')
    .child(S.document().schemaType('home').documentId('7a1d2651-89d5-4507-a4aa-42ef71155f79')),

  S.listItem()
    .title('About')
    .id('about')
    .icon(BookIcon)
    .child(S.document().schemaType('about').documentId('9937df9e-0501-4a8f-9a55-625f6894f294')),
]
