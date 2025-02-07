import {defineField, defineType} from 'sanity'
import {BoltIcon} from '@sanity/icons'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: BoltIcon,
  groups: [
    {
      name: 'project',
      title: 'Project',
    },
    {
      name: 'registration',
      title: 'Registration',
    },
    {
      name: 'team',
      title: 'Team',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'project',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'project',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: ['In progress', 'Completed', 'Cancelled'],
      },
      group: 'project',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'project',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'project',
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [{type: 'file'}],
      group: 'project',
    }),
    defineField({
      name: 'additionalDescriptions',
      title: 'Additional descriptions',
      type: 'array',
      of: [{type: 'titleAndDescription'}],
      group: 'project',
    }),
    defineField({
      name: 'availablePositions',
      title: 'Available positions',
      type: 'number',
      group: 'project',
    }),
    defineField({
      name: 'doubleBlock',
      title: 'Double block',
      type: 'doubleBlock',
      group: 'project',
    }),
    defineField({
      name: 'approvedRegistrations',
      title: 'Approved registrations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'registration'}]}],
      readOnly: true,
      group: 'project',
    }),
    defineField({
      name: 'registrationTitle',
      title: 'Registration title',
      type: 'text',
      group: 'registration',
    }),
    defineField({
      name: 'teamDescription',
      title: 'Team description',
      type: 'text',
      group: 'team',
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
