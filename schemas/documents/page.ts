import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'seo.title',
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'slug.current',
      media: 'seo.image',
    },
  },
})
