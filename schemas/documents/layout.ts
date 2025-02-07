import {defineField, defineType} from 'sanity'
import {DashboardIcon} from '@sanity/icons'

export default defineType({
  name: 'layout',
  title: 'Layout',
  type: 'document',
  description: 'Layout for the website',
  icon: DashboardIcon,
  fields: [
    defineField({
      name: 'footer',
      type: 'footer',
      title: 'Footer',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Layout',
      }
    },
  },
})
