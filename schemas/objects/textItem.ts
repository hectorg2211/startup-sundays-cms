import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'textItem',
  title: 'Text item',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      subtitle: 'description',
    },
  },
})
