import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),

    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [{type: 'iconLink'}],
    }),
  ],
})
