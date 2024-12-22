import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'longImage',
  title: 'Long image',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      subtitle: 'description',
    },
    prepare(selection) {
      return {
        title: 'Long image',
        subtitle: selection.subtitle,
      }
    },
  },
})
