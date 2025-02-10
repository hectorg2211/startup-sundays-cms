import {defineField, defineType} from 'sanity'
import {TimelineIcon} from '@sanity/icons'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  icon: TimelineIcon,
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
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})
