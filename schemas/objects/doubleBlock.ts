import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'doubleBlock',
  title: 'Double block',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'leftBlock',
      title: 'Left block',
      type: 'titleAndDescription',
    }),
    defineField({
      name: 'rightBlock',
      title: 'Right block',
      type: 'titleAndDescription',
    }),
  ],
  preview: {
    select: {
      title: 'leftBlock.title',
      subtitle: 'rightBlock.title',
    },
  },
})
