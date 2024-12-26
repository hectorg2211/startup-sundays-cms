import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'registration',
  title: 'Registrations',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
      readOnly: true,
    }),
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{type: 'project'}],
      readOnly: true,
    }),
    defineField({
      name: 'approveRegistration',
      title: 'Approve registration',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      media: 'project.mainImage',
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
