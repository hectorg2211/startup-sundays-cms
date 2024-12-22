import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'flexTextItems',
  title: 'Flex text items',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'textItem'}],
    }),
  ],
  preview: {
    select: {
      subtitle: 'items',
    },
    prepare(selection) {
      return {
        title: 'Flex text items',
        subtitle: `${selection.subtitle.length} items`,
      }
    },
  },
})
