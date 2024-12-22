import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'pageHeading',
      title: 'Page heading',
      type: 'pageHeading',
    }),
    defineField({
      name: 'descriptionWithIcons',
      title: 'Description with icons',
      type: 'descriptionWithIcons',
    }),
    defineField({
      name: 'longImage',
      title: 'Long image',
      type: 'longImage',
    }),
    defineField({
      name: 'flexItemsWithDescription',
      title: 'Flex items with description',
      type: 'flexItemsWithDescription',
    }),
    defineField({
      name: 'fullWidthContent',
      title: 'Full width content',
      type: 'fullWidthContent',
    }),
    defineField({
      name: 'flexTextItems',
      title: 'Flex text items',
      type: 'flexTextItems',
    }),
  ],
  preview: {
    select: {
      title: 'pageHeading.title',
    },
  },
})
