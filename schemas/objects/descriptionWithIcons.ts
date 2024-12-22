import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'descriptionWithIcons',
  title: 'Description with icons',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
  preview: {
    select: {
      subtitle: 'description',
    },
    prepare(selection) {
      return {
        title: 'Description with icons',
        subtitle: selection.subtitle,
      }
    },
  },
})
