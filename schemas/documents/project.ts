import {defineField, defineType} from 'sanity'
import {BoltIcon} from '@sanity/icons'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: BoltIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [{type: 'file'}],
    }),
    defineField({
      name: 'additionalDescriptions',
      title: 'Additional descriptions',
      type: 'array',
      of: [{type: 'titleAndDescription'}],
    }),
    defineField({
      name: 'doubleBlock',
      title: 'Double block',
      type: 'doubleBlock',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'mainImage',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
        media: selection.media,
      }
    },
  },
})
