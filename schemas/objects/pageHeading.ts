import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'pageHeading',
  title: 'Page heading',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})
